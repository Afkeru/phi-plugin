
import Config from './components/Config.js'

// 支持锅巴
export function supportGuoba() {
    return {
        // 配置项信息
        configInfo: {
            // 配置项 schemas
            schemas: [
                {
                    field: 'b19size',
                    label: '渲染体积',
                    helpMessage: '标准（100）值的宽度为1800px，按照百分比进行缩放，图片越大渲染越慢，100渲染需要约80秒',
                    bottomHelpMessage: '选择b19图片的渲染体积，以缩减渲染所需时间，太大可能会炸掉 Chromium ',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 1,
                        max: 9999,
                        placeholder: '缩放百分比',
                    },
                },
                {
                    field: 'randerQuality',
                    label: '渲染质量',
                    bottomHelpMessage: '对所有的图片生效，设置渲染的质量',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 1,
                        max: 100,
                        placeholder: '请输入渲染质量',
                    },
                },
                {
                    field: 'renderScale',
                    label: '渲染精度',
                    bottomHelpMessage: '对所有的图片生效，设置渲染精度',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 50,
                        max: 200,
                        placeholder: '请输入渲染精度',
                    },
                },
                {
                    field: 'isGuild',
                    label: '频道模式',
                    bottomHelpMessage: '开启后文字版仅限私聊，关闭文字版图片，文字版将折叠为一条消息',
                    component: 'Switch',
                },
                {
                    field: 'WordB19Img',
                    label: '文字版B19曲绘图片',
                    bottomHelpMessage: '关闭可大幅度提升发送速度',
                    component: 'Switch',
                },
                {
                    field: 'WordSuggImg',
                    label: 'Suggest曲绘图片',
                    bottomHelpMessage: '关闭可大幅度提升发送速度',
                    component: 'Switch',
                },
                {
                    field: 'GuessTipRecall',
                    label: '猜曲绘撤回',
                    bottomHelpMessage: '是否在下一条提示发出的时候撤回上一条',
                    component: 'Switch',
                },
                {
                    field: 'cmdhead',
                    label: '命令头',
                    bottomHelpMessage: '命令正则匹配开头，不包含#/，支持正则表达式，\'\\\' 请双写( \\s --> \\\\s )，最外层可以不加括号',
                    component: 'Input',
                    required: false,
                    componentProps: {
                        placeholder: '请输入命令头',
                    },
                },
                {
                    field: 'otherinfo',
                    label: '曲库',
                    bottomHelpMessage: '使用曲库的模式，若启用自定义则重名的以自定义为准',
                    component: 'Select',
                    componentProps: {
                        options: [
                            {
                                label: '原版曲库',
                                value: 0
                            },
                            {
                                label: '原版+自定义',
                                value: 1
                            },
                            {
                                label: '仅自定义',
                                value: 2
                            }
                        ]
                    }
                },
                {
                    field: 'GuessTipCd',
                    label: '曲绘提示间隔',
                    bottomHelpMessage: '猜曲绘的提示间隔时间，单位：秒',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 0,
                        max: 120,
                        placeholder: '请输入时间',
                    },
                },
                {
                    field: 'LetterNum',
                    label: '字母条数',
                    bottomHelpMessage: '开字母的条数，最大为99999最小为1',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 1,
                        max: 99999,
                        placeholder: '请输入数量',
                    },
                },
                {
                    field: 'LetterRevealCd',
                    label: '字母提示间隔',
                    bottomHelpMessage: '开字母的全局开字母间隔时间，单位：秒',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 0,
                        max: 120,
                        placeholder: '请输入时间',
                    },
                },
                {
                    field: 'LetterGuessCd',
                    label: '字母开启间隔',
                    bottomHelpMessage: '开字母的全局开启间隔时间，单位：秒',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 0,
                        max: 120,
                        placeholder: '请输入时间',
                    },
                },
                {
                    field: 'LetterTipCd',
                    label: '字母猜测间隔',
                    bottomHelpMessage: '开字母的全局猜测间隔时间，单位：秒',
                    component: 'InputNumber',
                    required: true,
                    componentProps: {
                        min: 0,
                        max: 120,
                        placeholder: '请输入时间',
                    },
                },
                {
                    field: 'LetterWinner',
                    label: '@猜对者',
                    bottomHelpMessage: '开字母是否在答案后附带猜对者，不会@人',
                    component: 'Switch',
                },
            ],
            // 获取配置数据方法（用于前端填充显示数据）
            getConfigData() {
                let config = {
                    b19size: Config.getDefOrConfig('config', 'b19size'),
                    randerQuality: Config.getDefOrConfig('config', 'randerQuality'),
                    renderScale: Config.getDefOrConfig('config', 'renderScale'),
                    WordB19Img: Config.getDefOrConfig('config', 'WordB19Img'),
                    WordSuggImg: Config.getDefOrConfig('config', 'WordSuggImg'),
                    cmdhead: Config.getDefOrConfig('config', 'cmdhead'),
                    GuessTipCd: Config.getDefOrConfig('config', 'GuessTipCd'),
                    GuessTipRecall: Config.getDefOrConfig('config', 'GuessTipRecall'),
                    isGuild: Config.getDefOrConfig('config', 'isGuild'),
                    LetterWinner: Config.getDefOrConfig('config', 'LetterWinner'),
                    LetterRevealCd: Config.getDefOrConfig('config', 'LetterRevealCd'),
                    LetterGuessCd: Config.getDefOrConfig('config', 'LetterGuessCd'),
                    LetterTipCd: Config.getDefOrConfig('config', 'LetterTipCd'),
                    otherinfo: Config.getDefOrConfig('config','otherinfo'),
                    LetterNum: Config.getDefOrConfig('config','LetterNum'),
                }
                return config
            },
            // 设置配置的方法（前端点确定后调用的方法）
            setConfigData(data, { Result }) {
                if (data.isGuild) {
                    data.WordB19Img = false
                    data.WordSuggImg = false
                }
                for (let [keyPath, value] of Object.entries(data)) {
                    Config.modify('config', keyPath, value)
                }
                return Result.ok({}, '保存成功~')
            },
        },
    }
}