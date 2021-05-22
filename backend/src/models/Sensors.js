const { Model, Sequelize } = require("sequelize");

class Sensors extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.STRING,
                primaryKey: true,
            },
            state: Sequelize.BOOLEAN,
            name: Sequelize.STRING,
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updated_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
        }, {
            sequelize
        });
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.hasMany(models.Reports, { foreignKey: 'report_id', as: 'report' });
    }
}

module.exports = Sensors;