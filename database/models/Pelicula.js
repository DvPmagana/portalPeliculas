module.exports = (sequelize, DataTypes) => {
    let alias = "movies";
    let config = {
        tablename: "movies",
        timestamps: false
    };
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        rating:{
            type: DataTypes.INTEGER
        },
        awards: {
            type: DataTypes.INTEGER
        },
        release_date: {
            type: DataTypes.DATE
        },
        length: {
            type: DataTypes.INTEGER
        },
        genre_id: {
            type: DataTypes.INTEGER
        }
    } 
    const movies = sequelize.define(alias,cols,config)

    movies.associate = function(models){
        movies.belongsTo(models.genres, {
            as: "genres",
            foreignKey: "genre_id"
        })
        movies.belongsToMany(models.actors, {
            as: "actors",
            through: "actor_movie",
            foreignKey:"movie_id",
            otherKey:"actor_id",
            timestamps:false
        })
    }

    return movies
}


