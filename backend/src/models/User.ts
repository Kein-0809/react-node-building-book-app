import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../utils/db';

class User extends Model {
  public user_id!: number;
  public email!: string;
  public password_hash!: string;
  public google_id?: string;
}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: DataTypes.STRING,
    },
    google_id: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
  }
);

export default User;
