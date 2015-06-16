/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    models: [
        'systemMapModel',
        'noticeNewsModel',
        'noticeColumnsModel',
        'thematic_LCC_PieModel',
        'thematic_LCCT_GridModel',
        'uUserRoleModel',
        'uUserInfoModel',
        'uRoleInfoModel',
        'uRightListModel',
        'uRightInfoModel',
        'uDeptInfoModel',
        'uRoleRightModel',
        'lawRegulationModel',
        'lawTypesModel',
        'landKfqTypeModel',
        'land_indexWeightModel',
        'land_indexWeightModel1',
        'landIndexMetaModel'
    ],
    stores: [
        'systemManageMapStore',
        'notice_newsStore',
        'systemManageMapTreeStore',
        'notice_columnsStore',
        'systemMapFeatureLayerStore',
        'thematic_LCCT_KFQStore',
        'tmematic_LCCT_StartYearStore',
        'tmematic_LCCT_EndYearStore',
        'MyArrayStore',
        'thematic_LCCT_GridStore',
        'thematic_LCC_PieStore',
        'systemMapQYYDLayerStore',
        'uDeptInfoStore',
        'uUserInfoStore',
        'uUserRoleStore',
        'uRoleInfoStore',
        'uRightInfoStore',
        'uRightListStore',
        'law_RegulationStore',
        'law_TypesStore',
        'landKfqTypeStore',
        'survey_IndexCurrent_MapStore',
        'landKfqTypeComboStore',
        'landIndexWeightIdealStore',
        'landIndexWeightFormStore',
        'landIndexWeightStore',
        'landIndexIdealStore',
        'landIndexIdealFormStore',
        'landIndexMetaStore',
        'landIndexIntensityValueStore',
        'landIndexMetaFilterStore'
    ],
    views: [
        'MainView',
        'thematic_LanduseConstructionContrast',
        'homePanel',
        'enterprise_LandusePropertyChangeMonitor',
        'enterprise_IntensityDynamicMonitor',
        'enterprise_UseRightExpireWarning',
        'thematic_LanuseIntensityTrend',
        'thematic_LanuseIntensityPotentialTrend',
        'intensityPotential_Expansion',
        'intensityPotential_Construction',
        'intensityPotential_Intension',
        'intensityPotential_Manage',
        'intensityuse_IndexWeightDetermine',
        'intensityuse_IndexStandard',
        'survey_DataReceive',
        'survey_IndexCurrentValueCalculation',
        'survey_DataManager',
        'task_Report',
        'task_DynamicInspect',
        'task_Locate',
        'task_Release',
        'notice_Publish',
        'notice_Browse',
        'notice_Manage',
        'law_Manage',
        'law_Import',
        'law_Search',
        'achievement_UploadDataManage',
        'achievement_DataUpload',
        'achievement_DataImportDatabase',
        'achievement_DataIBrowse',
        'achievement_DataIEdit',
        'system_MenuManage',
        'system_DepartmentManage',
        'system_RightManage',
        'system_MapManageTree',
        'system_DataSearch',
        'system_DataEdit',
        'system_DataManage',
        'mapInfoWindow',
        'system_MapManage',
        'system_MapAddWindow',
        'notice_Columns',
        'notice_ColumnsWindow',
        'thematic_LanduseConstructionChangeTrend',
        'survey_Landuse',
        'survey_TypicalEnterprise',
        'db_RightInfoAddWindow',
        'db_RightInfoWindow',
        'db_DeptInfoWindow',
        'db_RoleInfoWindow',
        'db_UserInfoEditTab',
        'db_UserInfoWindow',
        'system_UserManage',
        'db_UserRoleSettingWindow',
        'db_DeptInfoAddWindow',
        'db_UserInfoAddWindow',
        'law_TypesManagerWindow',
        'law_TypeWindow',
        'intensityuse_IndexIdealValueBinding',
        'intensityuse_IntensityScoreCalculation'
    ],
    name: 'MyApp',

    launch: function() {
        Ext.create('MyApp.view.MainView');
    }

});
