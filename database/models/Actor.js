module.exports = (sequelize, DataTypes) => {
    let alias = "actors";
    let config = {
        tablename: "actors",
        timestamps: false
    };
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name:{
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.INTEGER
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER
        }

    } 
    const actors = sequelize.define(alias,cols,config)
    
    actors.associate = function(models){
        actors.belongsToMany(models.movies ,{
            as: "movies",
            through: "actor_movie",
            foreignKey:"actor_id",
            otherKey:"movies_id",
            timestamps:false
        })
    }
    return actors
}
