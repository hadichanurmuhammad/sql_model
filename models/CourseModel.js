module.exports = async (Sequelize, sequelize) => {
    return await sequelize.define('course', {
            id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4()
            },
            title: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: Sequelize.DataTypes.BIGINT
            }
        })
    }