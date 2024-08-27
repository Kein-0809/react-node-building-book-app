import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../utils/db';

class Word extends Model {
  public word_id!: number;
  public en_word!: string;
  public jp_word!: string;
  public pronounce!: string;
  public part_of_speech!: string;
  public en_example!: string;
  public jp_example!: string;
  public image!: string;
  public synonyms!: string[];
}

Word.init(
  {
    word_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    en_word: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jp_word: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pronounce: {
      type: DataTypes.STRING,
    },
    part_of_speech: {
      type: DataTypes.STRING,
    },
    en_example: {
      type: DataTypes.TEXT,
    },
    jp_example: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
    synonyms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  {
    sequelize,
    modelName: 'Word',
    tableName: 'words',
    timestamps: true,
  }
);

export default Word;
