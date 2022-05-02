module.exports = (sequelize, DataTypes) => {
    let alias = "genres";
    let config = {
        tablename: "genres",
        timestamps: false
    };
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
        }
    } 
    const genres = sequelize.define(alias,cols,config)

    genres.associate = function(models){
        genres.hasMany(models.movies, {
            as: "movies",
            foreignKey: "genre_id"
        })
    }

    return genres
}


