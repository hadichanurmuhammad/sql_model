const { Sequelize } = require('sequelize');
const BoughtModel = require('./models/BoughtModel');
const UserModel = require('./models/UserModel');
const CourseModel = require('./models/CourseModel');
const TeachersModel = require('./models/TeachersModel');
const CategoryModel = require('./models/CategoryModel');
const LessonsModel = require('./models/LessonsModel')

const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/test_model', {
logging: log => console.log(`SQL: ${log}`)
})

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        let db = {}

        db.users = await UserModel(Sequelize, sequelize)
        db.boughts = await BoughtModel(Sequelize, sequelize)
        db.courses = await CourseModel(Sequelize, sequelize)
        db.teachers = await TeachersModel(Sequelize, sequelize)
        db.categories = await CategoryModel(Sequelize, sequelize)
        db.lessons = await LessonsModel(Sequelize, sequelize)

        // Referenses

        db.users.hasMany(db.boughts, {
            foreign_key: {
                name: 'user_id',
                allowNull: false
            }
        })

        db.boughts.belongsTo(db.users, {
            foreign_key: {
                name: 'user_id',
                allowNull: false
            }
        })

        db.boughts.hasMany(db.courses, {
            foreign_key: {
                name: 'bought_id',
                allowNull: false
            }
        })

        db.courses.belongsTo(db.boughts, {
            foreign_key: {
                name: 'bought_id',
                allowNull: false
            }
        })

        db.teachers.hasMany(db.courses, {
            foreign_key: {
                name: 'teacher_id',
                allowNull: false
            }
        })

        db.courses.belongsTo(db.teachers, {
            foreign_key: {
                name: 'teacher_id',
                allowNull: false
            }
        })

        db.categories.hasMany(db.courses, {
            foreign_key: {
                name: 'category_id',
                allowNull: false
            }
        })

        db.courses.belongsTo(db.categories, {
            foreign_key: {
                name: 'category_id',
                allowNull: false
            }
        })

        db.courses.hasMany(db.lessons, {
            foreign_key: {
                name: 'course_id',
                allowNull: false
            }
        })

        db.lessons.belongsTo(db.courses, {
            foreign_key: {
                name: 'course_id',
                allowNull: false
            }
        })

        sequelize.sync({ force: true })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main()