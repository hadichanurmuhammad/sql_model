module.exports = async (Sequelize, sequelize) => {
    return await sequelize.define('teachers', {
            id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4()
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            }
        })
    }