import { Schema, model, models, Model } from 'mongoose';
import { ISetting } from '@/types/schema';

export const defaultSetting = {
  blogName: 'website',
  blogSlogan: '',
  blogLogo: 'data:image/png;base64,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',
  recordInfo: '',
  showBlogIntro: true,
  blogIntro: '',
  postPageSize: 10,
  enablePreview: true,
  showLicense: true,
  enableComments: true,
  commentPageSize: 20,
  enableStatistics: false,
  statisticsKey: ''
} as ISetting;

export class Setting {
    private _model: Model<ISetting>;

    constructor () {
      const schema = new Schema<ISetting>({
        blogName: { type: String },
        blogSlogan: { type: String },
        blogLogo: { type: String },
        recordInfo: { type: String },
        showBlogIntro: { type: Boolean },
        blogIntro: { type: String },
        postPageSize: { type: Number },
        enablePreview: { type: Boolean },
        showLicense: { type: Boolean },
        enableComments: { type: Boolean },
        commentPageSize: { type: Number },
        enableStatistics: { type: Boolean },
        statisticsKey: { type: String }
      });

      // 初始化默认系统设置
      schema.statics.initData = () => {
        this.model.exists({}).then(exist => {
          if (!exist) {
            this.model.create(defaultSetting);
          }
        });
      };

      if (models.setting) {
        this._model = models.setting;
      } else {
        this._model = model<ISetting>('setting', schema, 'setting');
      }
    }

    public get model (): Model<ISetting> {
      return this._model;
    }
}
