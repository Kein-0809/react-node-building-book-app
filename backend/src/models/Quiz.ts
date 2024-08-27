import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../utils/db';
import User from './User';
import Word from './Word';

class Quiz extends Model {
  public quiz_id!: number;
  public user_id!: number;
  public word_id!: number;
  public selected_option!: string;
  public is_correct!: boolean;
  public attempted_at!: Date;
}

Quiz.init(
  {
    quiz_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'user_id',
      },
    },
    word_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Word,
        key: 'word_id',
      },
    },
    selected_option: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_correct: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    attempted_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Quiz',
    tableName: 'quizzes',
    timestamps: true,
  }
);

export default Quiz;
