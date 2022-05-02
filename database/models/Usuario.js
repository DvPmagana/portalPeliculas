module.exports = (sequelize, DataTypes) => {
    let alias = "users";
    let config = {
        tablename: "users",
        timestamps: false
    };
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        rol: {
            type: DataTypes.INTEGER
        }
    } 
    const users = sequelize.define(alias,cols,config)

    return users
}
