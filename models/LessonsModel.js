module.exports = async (Sequelize, sequelize) => {
    return await sequelize.define('lessons', {
            id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4()
            },
            title: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            video: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            }
        })
    }