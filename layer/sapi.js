var COMMON = require('./common');

var SAPI = {
    cmdStatus: COMMON.cmdStatus,
    nvItemIds: COMMON.nvItemIds
};

SAPI.zbDeviceInfo = {
    'DEV_STATE': 0,
    'IEEE_ADDR': 1,
    'SHORT_ADDR': 2,
    'PARENT_SHORT_ADDR': 3,
    'PARENT_IEEE_ADDR': 4,
    'CHANNEL': 5,
    'PAN_ID': 6,
    'EXT_PAN_ID': 7
};

SAPI.bindAction = {
    'REMOVE_BIND': 0,
    'CREATE_BIND': 1
};

SAPI.searchType = {
    'ZB_IEEE_SEARCH': 1
};

SAPI.txOptAck = {
    'NONE': 0x00,
    'END_TO_END_ACK': 0x01
};

SAPI.nvItemIdsUint8 = {
    // OSAL NV item IDs
    'EXTADDR': 0x01,
    'BOOTCOUNTER': 0x02,
    'STARTUP_OPTION': 0x03,
    'START_DELAY': 0x04,
    // NWK Layer NV item IDs
    'NIB': 0x21,
    'DEVICE_LIST': 0x22,
    'ADDRMGR': 0x23,
    'POLL_RATE': 0x24,
    'QUEUED_POLL_RATE': 0x25,
    'RESPONSE_POLL_RATE': 0x26,
    'REJOIN_POLL_RATE': 0x27,
    'DATA_RETRIES': 0x28,
    'POLL_FAILURE_RETRIES': 0x29,
    'STACK_PROFILE': 0x2A,
    'INDIRECT_MSG_TIMEOUT': 0x2B,
    'ROUTE_EXPIRY_TIME': 0x2C,
    'EXTENDED_PAN_ID': 0x2D,
    'BCAST_RETRIES': 0x2E,
    'PASSIVE_ACK_TIMEOUT': 0x2F,
    'BCAST_DELIVERY_TIME': 0x30,
    'NWK_MODE': 0x31,
    'CONCENTRATOR_ENABLE': 0x32,
    'CONCENTRATOR_DISCOVERY': 0x33,
    'CONCENTRATOR_RADIUS': 0x34,
    'CONCENTRATOR_RC': 0x36,
    'NWK_MGR_MODE': 0x37,
    'SRC_RTG_EXPIRY_TIME': 0x38,
    'ROUTE_DISCOVERY_TIME': 0x39,
    'NWK_ACTIVE_KEY_INFO': 0x3A,
    'NWK_ALTERN_KEY_INFO': 0x3B,
    'ROUTER_OFF_ASSOC_CLEANUP': 0x3C,
    'NWK_LEAVE_REQ_ALLOWED': 0x3D,
    'NWK_CHILD_AGE_ENABLE': 0x3E,
    'DEVICE_LIST_KA_TIMEOUT': 0x3F,
    // APS Layer NV item IDs
    'BINDING_TABLE': 0x41,
    'GROUP_TABLE': 0x42,
    'APS_FRAME_RETRIES': 0x43,
    'APS_ACK_WAIT_DURATION': 0x44,
    'APS_ACK_WAIT_MULTIPLIER': 0x45,
    'BINDING_TIME': 0x46,
    'APS_USE_EXT_PANID': 0x47,
    'APS_USE_INSECURE_JOIN': 0x48,
    'COMMISSIONED_NWK_ADDR': 0x49,
    'APS_NONMEMBER_RADIUS': 0x4B,       // Multicast non_member radius
    'APS_LINK_KEY_TABLE': 0x4C,
    'APS_DUPREJ_TIMEOUT_INC': 0x4D,
    'APS_DUPREJ_TIMEOUT_COUNT': 0x4E,
    'APS_DUPREJ_TABLE_SIZE': 0x4F,
    // System statistics and metrics NV ID
    'DIAGNOSTIC_STATS': 0x50,
    // Security NV Item IDs
    'SECURITY_LEVEL': 0x61,
    'PRECFGKEY': 0x62,
    'PRECFGKEYS_ENABLE': 0x63,
    'SECURITY_MODE': 0x64,
    'SECURE_PERMIT_JOIN': 0x65,
    'APS_LINK_KEY_TYPE': 0x66,
    'APS_ALLOW_R19_SECURITY': 0x67,

    'IMPLICIT_CERTIFICATE': 0x69,
    'DEVICE_PRIVATE_KEY': 0x6A,
    'CA_PUBLIC_KEY': 0x6B,
    'KE_MAX_DEVICES': 0x6C,

    'USE_DEFAULT_TCLK': 0x6D,
    // 'TRUSTCENTER_ADDR': 0x6E,        // deprecated
    'RNG_COUNTER': 0x6F,
    'RANDOM_SEED': 0x70,
    'TRUSTCENTER_ADDR': 0x71,
    // ZDO NV Item IDs
    'USERDESC': 0x81,
    'NWKKEY': 0x82,
    'PANID': 0x83,
    'CHANLIST': 0x84,
    'LEAVE_CTRL': 0x85,
    'SCAN_DURATION': 0x86,
    'LOGICAL_TYPE': 0x87,
    'NWKMGR_MIN_TX': 0x88,
    'NWKMGR_ADDR': 0x89,
    'ZDO_DIRECT_CB': 0x8F,
    // ZCL NV item IDs
    'SCENE_TABLE': 0x91,
    'MIN_FREE_NWK_ADDR': 0x92,
    'MAX_FREE_NWK_ADDR': 0x93,
    'MIN_FREE_GRP_ID': 0x94,
    'MAX_FREE_GRP_ID': 0x95,
    'MIN_GRP_IDS': 0x96,
    'MAX_GRP_IDS': 0x97,
    'OTA_BLOCK_REQ_DELAY': 0x98,
    // Non-standard NV item IDs
    'SAPI_ENDPOINT': 0xA1,
    // NV Items Reserved for Commissioning Cluster Startup Attribute Set (SAS):
    // 0x00B1 - 0x00BF: Parameters related to APS and NWK layers
    // 0x00C1 - 0x00CF: Parameters related to Security
    // 0x00D1 - 0x00DF: Current key parameters
    'SAS_SHORT_ADDR': 0xB1,
    'SAS_EXT_PANID': 0xB2,
    'SAS_PANID': 0xB3,
    'SAS_CHANNEL_MASK': 0xB4,
    'SAS_PROTOCOL_VER': 0xB5,
    'SAS_STACK_PROFILE': 0xB6,
    'SAS_STARTUP_CTRL': 0xB7,
    'SAS_TC_ADDR': 0xC1,
    'SAS_TC_MASTER_KEY': 0xC2,
    'SAS_NWK_KEY': 0xC3,
    'SAS_USE_INSEC_JOIN': 0xC4,
    'SAS_PRECFG_LINK_KEY': 0xC5,
    'SAS_NWK_KEY_SEQ_NUM': 0xC6,
    'SAS_NWK_KEY_TYPE': 0xC7,
    'SAS_NWK_MGR_ADDR': 0xC8,
    'SAS_CURR_TC_MASTER_KEY': 0xD1,
    'SAS_CURR_NWK_KEY': 0xD2,
    'SAS_CURR_PRECFG_LINK_KEY': 0xD3,
};

module.exports = SAPI;
