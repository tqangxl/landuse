/*
 * File: app/view/intensityPotential_Construct.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.intensityPotential_Construct', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.intensityPotential_Construct',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.field.ComboBox',
        'Ext.button.Button',
        'Ext.form.field.Hidden',
        'Ext.form.Panel',
        'Ext.form.Label',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.grid.View'
    ],

    height: 588,
    width: 1119,
    layout: 'border',
    title: '结构潜力测算',
    defaultListenerScope: true,

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'combobox',
                    width: 250,
                    fieldLabel: '开发区名称',
                    name: 'kfqName',
                    submitValue: false,
                    displayField: 'name',
                    store: 'thematic_LCCT_KFQStore',
                    valueField: 'value',
                    listeners: {
                        change: 'onComboboxChange1'
                    }
                },
                {
                    xtype: 'combobox',
                    id: 'construct_layerUrls_Combo',
                    width: 220,
                    fieldLabel: '选择年份',
                    labelWidth: 70,
                    submitValue: false,
                    displayField: 'mapName',
                    store: 'survey_IndexCurrent_MapStore',
                    valueField: 'mapUrl',
                    listeners: {
                        change: 'onIntensity_layerUrls_ComboChange1'
                    }
                },
                {
                    xtype: 'combobox',
                    id: 'construct_weight_Combo',
                    width: 200,
                    fieldLabel: '权重值记录',
                    labelWidth: 70,
                    submitValue: false,
                    displayField: 'kfqName',
                    store: 'landIndexWeightStore',
                    valueField: 'projectId',
                    listeners: {
                        change: 'onIntensity_layerUrls_ComboChange11'
                    }
                },
                {
                    xtype: 'combobox',
                    id: 'construct_ideal_Combo',
                    width: 200,
                    fieldLabel: '理想值记录',
                    labelWidth: 70,
                    submitValue: false,
                    displayField: 'kfqName',
                    store: 'landIndexIdealStore',
                    valueField: 'projectId',
                    listeners: {
                        change: 'onIntensity_layerUrls_ComboChange111'
                    }
                },
                {
                    xtype: 'button',
                    handler: function() {
                        var mainWeight = Ext.getCmp('construct_mainWeightField').getValue();
                        var mainIdeal = Ext.getCmp('construct_mainIdealField').getValue();
                        var mainYjccz = Ext.getCmp('construct_mainYjcczField').getValue();
                        var developWeight = Ext.getCmp('construct_developWeightField').getValue();
                        var developIdeal = Ext.getCmp('construct_developIdealField').getValue();
                        var developYjccz = Ext.getCmp('construct_developYjcczField').getValue();

                        var mainConstruct = mainYjccz*(mainIdeal-mainWeight);
                        var developConstruct = developYjccz*(developIdeal-developWeight);

                        Ext.getCmp('construct_mainConstructField').setValue(mainConstruct);
                        Ext.getCmp('construct_developConstructField').setValue(developConstruct);
                    },
                    text: '结构潜力测算'
                },
                {
                    xtype: 'button',
                    handler: function() {
                        var isCalc = Ext.getCmp('construct_isCalculated').getValue();
                        if(!isCalc){
                            Ext.Msg.alert('提示','请先进行潜力测算，再保存结果。');
                            return;
                        }
                        var myform = Ext.getCmp('intensity_construct_form').getForm();
                        if (myform.isValid())
                        {
                            myform.submit({
                                url : 'add_construct',
                                success : function (form, action)
                                {
                                    Ext.Msg.alert('成功', '测算结果保存成功。');
                                    Ext.getCmp('intensity_construct_grid').getStore().reload();
                                },
                                failure: function(form, action){
                                    Ext.Msg.alert('失败', '测算结果保存失败，请重试。');
                                }
                            });
                        }
                        else
                        {
                            Ext.Msg.alert('注意', '填写的信息有误，请检查！');
                        }
                    },
                    text: '保存测算结果'
                },
                {
                    xtype: 'hiddenfield',
                    id: 'construct_isCalculated',
                    fieldLabel: 'Label',
                    value: false
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'form',
            region: 'north',
            split: true,
            height: 150,
            id: 'intensity_construct_form',
            bodyPadding: 10,
            jsonSubmit: true,
            layout: {
                type: 'table',
                columns: 9
            },
            items: [
                {
                    xtype: 'hiddenfield',
                    id: 'construct_kfqName_field',
                    fieldLabel: 'Label',
                    name: 'kfqName'
                },
                {
                    xtype: 'hiddenfield',
                    id: 'construct_kfqMap_field',
                    fieldLabel: 'Label',
                    name: 'kfqMap'
                },
                {
                    xtype: 'label',
                    rowspan: 2,
                    html: '1,1',
                    width: '',
                    text: '项目'
                },
                {
                    xtype: 'label',
                    colspan: 4,
                    html: '1,2',
                    text: '主区'
                },
                {
                    xtype: 'label',
                    colspan: 4,
                    html: '1,6',
                    text: '发展方向区'
                },
                {
                    xtype: 'label',
                    html: '2,2',
                    text: '现状值(%)'
                },
                {
                    xtype: 'label',
                    html: '2,3',
                    text: '理想值(%)'
                },
                {
                    xtype: 'label',
                    html: '2,4',
                    text: '已建成城镇面积(hm2)'
                },
                {
                    xtype: 'label',
                    html: '2,5',
                    text: '结构潜力(hm2)'
                },
                {
                    xtype: 'label',
                    html: '2,6',
                    text: '现状值(%)'
                },
                {
                    xtype: 'label',
                    html: '2,7',
                    text: '理想值(%)'
                },
                {
                    xtype: 'label',
                    html: '2,8',
                    text: '已建成城镇面积(hm2)'
                },
                {
                    xtype: 'label',
                    html: '2,9',
                    text: '结构潜力(hm2)'
                },
                {
                    xtype: 'textfield',
                    colspan: 2,
                    id: 'construct_mainWeightField',
                    width: 160,
                    fieldLabel: '工业用地率',
                    labelWidth: 80,
                    name: 'mainBuildWeight'
                },
                {
                    xtype: 'textfield',
                    colspan: 1,
                    id: 'construct_mainIdealField',
                    width: 80,
                    name: 'mainBuildIdeal'
                },
                {
                    xtype: 'textfield',
                    colspan: 1,
                    id: 'construct_mainYjcczField',
                    width: 130,
                    name: 'mainYjcczmj'
                },
                {
                    xtype: 'textfield',
                    colspan: 1,
                    id: 'construct_mainConstructField',
                    width: 120,
                    name: 'mainConstruct'
                },
                {
                    xtype: 'textfield',
                    colspan: 1,
                    id: 'construct_developWeightField',
                    width: 80,
                    name: 'developBuildWeight'
                },
                {
                    xtype: 'textfield',
                    colspan: 1,
                    id: 'construct_developIdealField',
                    width: 80,
                    name: 'developBuildIdeal'
                },
                {
                    xtype: 'textfield',
                    colspan: 1,
                    id: 'construct_developYjcczField',
                    width: 130,
                    name: 'developYjcczmj'
                },
                {
                    xtype: 'textfield',
                    colspan: 1,
                    id: 'construct_developConstructField',
                    width: 120,
                    name: 'developConstruct'
                }
            ]
        },
        {
            xtype: 'gridpanel',
            region: 'center',
            id: 'intensity_construct_grid',
            title: '开发区土地集约利用结构潜力测算数据',
            store: 'landIntensityConstructStore',
            columns: [
                {
                    xtype: 'rownumberer'
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'kfqName',
                    text: '开发区名称'
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'kfqMap',
                    text: '测算地图'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'calcDate',
                    text: '测算时间',
                    format: 'Y-m-d'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'mainBuildWeight',
                    text: '现状值(主区)'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'mainBuildIdeal',
                    text: '理想值(主区)'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'mainYjcczmj',
                    text: '已建成城镇(主区)'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'mainConstruct',
                    text: '结构潜力(主区)'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'developBuildWeight',
                    text: '现状值(发展区)'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'developBuildIdeal',
                    text: '理想值(发展区)'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'developYjcczmj',
                    text: '已建成城镇(发展区)'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'developConstruct',
                    text: '结构潜力(发展区)'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'textfield',
                            id: 'construct_SearchText'
                        },
                        {
                            xtype: 'button',
                            handler: function() {
                                var searchKeyword = Ext.getCmp('expansion_SearchText').getValue();
                                var mystore = Ext.getCmp('intensity_expansion_grid').getStore(); //获得store对象
                                //在load事件中添加参数
                                mystore.load({
                                    params :{searchKeyword : searchKeyword}
                                });
                            },
                            icon: 'images/table/search.png',
                            text: '查询'
                        },
                        {
                            xtype: 'button',
                            handler: function() {
                                //获取数据
                                var grid = Ext.getCmp('intensity_construct_grid');
                                var records = grid.getSelection();
                                if (records.length === 0){
                                    Ext.Msg.alert('提示', '请选择一条数据后再点击删除按钮。');
                                    return;
                                }else if(records.length >1){
                                    Ext.Msg.alert('提示', '每次只能删除一条法律。');
                                    return;
                                }
                                var id = records[0].get("id");
                                var columnName= records[0].get("kfqName");
                                Ext.Msg.confirm('提示', '您正在删除<br/>[' +columnName+']测算数据。<br/> 确认删除？', getResult);


                                function getResult(confirm)
                                {
                                    console.log('confirm:', confirm);
                                    if (confirm == "yes"){
                                        Ext.Ajax.request(
                                        {
                                            url : 'del_construct',
                                            params :
                                            {
                                                id : id
                                            },
                                            success : function (response){
                                                Ext.Msg.alert('成功提示', '记录删除成功。');
                                                grid.getStore().reload();
                                            },
                                            failure : function (response){
                                                Ext.Msg.alert('失败提示', '记录删除失败。');
                                            }
                                        });
                                    }
                                }
                            },
                            icon: 'images/table/delete.png',
                            text: '删除'
                        }
                    ]
                }
            ],
            listeners: {
                cellclick: 'onIntensity_construct_gridCellClick'
            }
        }
    ],

    onComboboxChange1: function(field, newValue, oldValue, eOpts) {
        var kfqName = field.getRawValue();
        //图层过滤
        var storeMap = Ext.getCmp('construct_layerUrls_Combo').getStore();
        storeMap.clearFilter();
        storeMap.filter('mapKey',newValue);
        //权重值过滤
        var storeWeight = Ext.getCmp('construct_weight_Combo').getStore();
        storeWeight.clearFilter();
        storeWeight.filter('kfqName',kfqName);
        //理想值过滤
        var storeIdeal = Ext.getCmp('construct_ideal_Combo').getStore();
        storeIdeal.clearFilter();
        storeIdeal.filter('kfqName',kfqName);

        Ext.getCmp('intensity_construct_form').getForm().reset();
        Ext.getCmp('construct_isCalculated').setValue('false');
        Ext.getCmp('construct_kfqName_field').setValue(kfqName);
    },

    onIntensity_layerUrls_ComboChange1: function(field, newValue, oldValue, eOpts) {
        Ext.getCmp('construct_kfqMap_field').setValue(field.getRawValue());

        //加入地图的js文件
        var head = document.getElementsByTagName('head')[0];
        var script= document.createElement("script");
        script.type = "text/javascript";
        script.src="mapjs/intensity_construct_map.js";
        head.appendChild(script);
    },

    onIntensity_layerUrls_ComboChange11: function(field, newValue, oldValue, eOpts) {
        var store = field.getStore();
        var index = store.find('projectId',newValue);
        if(index <0){
            return;
        }
        var record = store.getAt(index);
        Ext.getCmp('construct_mainWeightField').setValue(record.get('mainLanduseConstructIndustry'));
        Ext.getCmp('construct_developWeightField').setValue(record.get('developLanduseConstructIndustry'));
    },

    onIntensity_layerUrls_ComboChange111: function(field, newValue, oldValue, eOpts) {
        var store = field.getStore();
        var index = store.find('projectId',newValue);
        if(index <0){
            return;
        }
        var record = store.getAt(index);
        Ext.getCmp('construct_mainIdealField').setValue(record.get('mainLanduseConstructIndustry'));
        Ext.getCmp('construct_developIdealField').setValue(record.get('developLanduseConstructIndustry'));
    },

    onIntensity_construct_gridCellClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        Ext.getCmp('intensity_construct_form').getForm().loadRecord(record);
    }

});