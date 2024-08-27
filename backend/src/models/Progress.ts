import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../utils/db';
import User from './User';
import Word from './Word';

class Progress extends Model {
  public progress_id!: number;
  public user_id!: number;
  public word_id!: number;
  public current_box!: number;
  public next_review_date!: Date;
  public status!: string;
  public last_reviewed_at!: Date;
}

Progress.init(
  {
    progress_id: {
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
    current_box: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    next_review_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_reviewed_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Progress',
    tableName: 'user_word_progress',
    timestamps: true,
  }
);

export default Progress;
