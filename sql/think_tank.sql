/*
Navicat MySQL Data Transfer

Source Server         : 47.104.8.66_3306
Source Server Version : 50720
Source Host           : 47.104.8.66:3306
Source Database       : think_tank

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-02-08 14:44:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` varchar(50) DEFAULT NULL COMMENT '标题',
  `author` varchar(50) DEFAULT NULL COMMENT '作者',
  `source` varchar(50) DEFAULT '' COMMENT '来源',
  `createdDate` datetime DEFAULT NULL COMMENT '创作时间',
  `content` text COMMENT '内容',
  `imgUrl` varchar(255) DEFAULT NULL COMMENT '图片地址',
  `imgState` varchar(255) DEFAULT NULL COMMENT '图片说明',
  `textTypeId` int(11) DEFAULT NULL COMMENT '文本类型',
  `organizationId` int(11) DEFAULT NULL COMMENT '机构Id',
  `addTime` datetime DEFAULT NULL COMMENT '添加时间',
  `shield` int(11) DEFAULT '0' COMMENT '0(不屏蔽)，1(屏蔽)',
  `recommend` int(11) DEFAULT '0' COMMENT '是否推荐 0(否)， 1(是)',
  `accessory` varchar(255) DEFAULT '' COMMENT '附件',
  `literatureType` int(11) DEFAULT '0' COMMENT '文献类型114(专家文献),115(演讲),116(著作),117(研究成果),118(调研报告),119(市场数据)',
  PRIMARY KEY (`id`),
  KEY `textTypeId` (`textTypeId`) USING BTREE,
  KEY `organizationId` (`organizationId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=185 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for article_sort
-- ----------------------------
DROP TABLE IF EXISTS `article_sort`;
CREATE TABLE `article_sort` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `name` varchar(20) DEFAULT NULL COMMENT '类型名称',
  `parentId` int(11) DEFAULT '0' COMMENT '父级分类Id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=134 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for blogroll
-- ----------------------------
DROP TABLE IF EXISTS `blogroll`;
CREATE TABLE `blogroll` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `name` varchar(50) DEFAULT NULL COMMENT '合作单位名',
  `imgUrl` varchar(255) DEFAULT NULL COMMENT '图片地址',
  `linkurl` varchar(255) DEFAULT NULL COMMENT '连接地址',
  `type` int(11) DEFAULT NULL COMMENT '0(共建机构),1(友情链接),2(合作媒体),3(特别成员单位)',
  `note` varchar(255) DEFAULT NULL COMMENT '备注',
  `sortIndex` int(11) DEFAULT '0' COMMENT '排序索引',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for client_user
-- ----------------------------
DROP TABLE IF EXISTS `client_user`;
CREATE TABLE `client_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `email` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `pwd` varchar(50) DEFAULT NULL COMMENT '密码',
  `name` varchar(20) DEFAULT NULL COMMENT '用户名',
  `jobType` varchar(20) DEFAULT NULL COMMENT '职业类型',
  `region` varchar(10) DEFAULT NULL COMMENT '所在地区',
  `phoneNumber` varchar(11) DEFAULT NULL COMMENT '电话号码',
  `workUnit` varchar(50) DEFAULT NULL COMMENT '工作单位',
  `unitType` varchar(11) DEFAULT NULL COMMENT '单位类型1(党政智库),2(社科院智库),3(党校（行政学院）智库),4(省级专门智库),5(省级改革智库),6(高校智库),7(社会智库)',
  `activationCode` varchar(50) DEFAULT NULL COMMENT '激活码',
  `status` int(11) DEFAULT '0' COMMENT '0(未激活),1(已激活)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `clientUserId` int(11) DEFAULT NULL COMMENT '前端用户id',
  `clientUserName` varchar(50) DEFAULT NULL COMMENT '前端用户名',
  `articleId` int(11) DEFAULT NULL COMMENT '文章id',
  `articleTitle` varchar(255) DEFAULT NULL COMMENT '文章标题',
  `content` varchar(255) DEFAULT NULL COMMENT '评论内容',
  `addTime` datetime DEFAULT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for operation_note
-- ----------------------------
DROP TABLE IF EXISTS `operation_note`;
CREATE TABLE `operation_note` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `userName` varchar(20) DEFAULT NULL COMMENT '操作用户名',
  `operationLog` varchar(50) DEFAULT NULL COMMENT '操作日志',
  `operationTime` datetime DEFAULT NULL COMMENT '操作时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for organization
-- ----------------------------
DROP TABLE IF EXISTS `organization`;
CREATE TABLE `organization` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `name` varchar(50) DEFAULT NULL COMMENT '机构名',
  `intro` text COMMENT '单位简介',
  `lead` varchar(255) DEFAULT NULL COMMENT '领导',
  `institutionSetting` text COMMENT '机构设置',
  `contactUs` varchar(255) DEFAULT NULL COMMENT '联系我们',
  `type` int(11) DEFAULT NULL COMMENT '0(智库机构)，1(智库联盟)',
  `shield` int(11) DEFAULT NULL COMMENT '0(不屏蔽),1(屏蔽)',
  `territoryName` varchar(20) DEFAULT NULL COMMENT '地域名',
  `organizationType` int(11) DEFAULT NULL COMMENT '机构类型1(党政智库),2(社科院智库),3(党校（行政学院）智库),4(省级专门智库),5(省级改革智库),6(高校智库),7(社会智库)',
  `sortIndex` int(11) DEFAULT '0' COMMENT '排序索引',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for other_configuration
-- ----------------------------
DROP TABLE IF EXISTS `other_configuration`;
CREATE TABLE `other_configuration` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `content` text COMMENT '内容',
  `type` int(11) DEFAULT NULL COMMENT '配置类型0(关于我们),1(加入联盟),2(法律顾问),3(广告服务),4(网站声明)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for questionnaire
-- ----------------------------
DROP TABLE IF EXISTS `questionnaire`;
CREATE TABLE `questionnaire` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `clientUserId` int(11) DEFAULT NULL COMMENT '前端用户id',
  `clientUserName` varchar(50) DEFAULT NULL COMMENT '前端用户名',
  `articleId` int(11) DEFAULT NULL COMMENT '文章id',
  `articleTitle` varchar(255) DEFAULT NULL COMMENT '文章标题',
  `submitTime` datetime DEFAULT NULL COMMENT '提交时间',
  `QuestionnaireResultUrl` varchar(100) DEFAULT NULL COMMENT '调查问卷结果Url',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `name` varchar(255) DEFAULT NULL COMMENT '菜单名',
  `code` varchar(255) DEFAULT NULL COMMENT '菜单编码',
  `menuId` int(11) DEFAULT NULL COMMENT '父级菜单Id',
  PRIMARY KEY (`id`),
  KEY `menuId` (`menuId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `name` varchar(255) DEFAULT NULL COMMENT '角色名',
  `note` varchar(255) DEFAULT NULL COMMENT '角色备注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for sys_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_menu`;
CREATE TABLE `sys_role_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `roleId` int(11) DEFAULT NULL COMMENT '角色Id',
  `menuId` int(11) DEFAULT NULL COMMENT '菜单Id',
  PRIMARY KEY (`id`),
  KEY `roleId` (`roleId`) USING BTREE,
  KEY `menuId` (`menuId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `username` varchar(64) DEFAULT NULL COMMENT '登陆名',
  `password` varchar(255) DEFAULT NULL COMMENT '登陆密码',
  `roleId` int(11) DEFAULT NULL COMMENT '角色id',
  `createTime` datetime DEFAULT NULL COMMENT '创建时间',
  `type` int(11) DEFAULT '0' COMMENT '用户类型0(后台用户),1(前端用户)',
  PRIMARY KEY (`id`),
  KEY `roleId` (`roleId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `userId` int(11) DEFAULT NULL COMMENT '用户Id',
  `roleId` int(11) DEFAULT NULL COMMENT '角色Id',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`) USING BTREE,
  KEY `roleId` (`roleId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for territory
-- ----------------------------
DROP TABLE IF EXISTS `territory`;
CREATE TABLE `territory` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for title_img
-- ----------------------------
DROP TABLE IF EXISTS `title_img`;
CREATE TABLE `title_img` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `imgUrl` varchar(255) DEFAULT NULL COMMENT '图片地址',
  `addTime` datetime DEFAULT NULL COMMENT '添加时间',
  `state` int(11) DEFAULT '0' COMMENT '0(不展示)， 1(展示)',
  `advertisingPlace` int(11) DEFAULT '0' COMMENT '广告位置0(头部),1(中上),2(中部), 3(中下)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for video_news
-- ----------------------------
DROP TABLE IF EXISTS `video_news`;
CREATE TABLE `video_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `title` varchar(50) DEFAULT NULL COMMENT '视频标题',
  `content` varchar(255) DEFAULT NULL COMMENT '详情内容',
  `videoUrl` varchar(255) DEFAULT NULL COMMENT '视频url',
  `createTime` datetime DEFAULT NULL COMMENT '创建时间',
  `shield` int(11) DEFAULT '0' COMMENT '0(不屏蔽),1(屏蔽)',
  `organizationId` int(11) DEFAULT '0' COMMENT '智库机构id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Table structure for zk_expert
-- ----------------------------
DROP TABLE IF EXISTS `zk_expert`;
CREATE TABLE `zk_expert` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键自增',
  `img` varchar(255) DEFAULT NULL COMMENT '专家照片',
  `name` varchar(50) DEFAULT NULL COMMENT '专家姓名',
  `sex` varchar(4) DEFAULT NULL COMMENT '性别',
  `nativePlace` varchar(50) DEFAULT NULL COMMENT '籍贯',
  `dateOfBirth` varchar(20) DEFAULT NULL COMMENT '出生日期',
  `position` varchar(50) DEFAULT NULL COMMENT '职称',
  `duty` varchar(255) DEFAULT NULL COMMENT '职务',
  `expertsTitles` varchar(255) DEFAULT NULL COMMENT '专家称号',
  `organizationId` int(11) DEFAULT NULL COMMENT '所属机构',
  `organizationName` varchar(50) DEFAULT NULL COMMENT '机构名',
  `educational` varchar(255) DEFAULT NULL COMMENT '学历',
  `degree` varchar(255) DEFAULT NULL COMMENT '学位',
  `resume` text COMMENT '个人简历',
  `research` varchar(255) DEFAULT NULL COMMENT '研究领域',
  `fieldType` int(11) DEFAULT '0' COMMENT '研究领域类型0党建、1 社会、2生态、3政治、4经济、5文化、6热点专题、7国际关系',
  `decisionConsultingResult` text COMMENT '决策咨询成果',
  `academicWorks` text COMMENT '学术成果',
  `shield` int(11) DEFAULT '0' COMMENT '0(不屏蔽), 1(屏蔽)',
  `sortIndex` int(11) DEFAULT '0' COMMENT '排序索引',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Function structure for GET_FIRST_PINYIN_CHAR
-- ----------------------------
DROP FUNCTION IF EXISTS `GET_FIRST_PINYIN_CHAR`;
DELIMITER ;;
CREATE DEFINER=`root`@`%` FUNCTION `GET_FIRST_PINYIN_CHAR`(PARAM VARCHAR(255)) RETURNS varchar(2) CHARSET utf8
BEGIN  
    DECLARE V_RETURN VARCHAR(255);  
    DECLARE V_FIRST_CHAR VARCHAR(2);  
    SET V_FIRST_CHAR = UPPER(LEFT(PARAM,1));  
    SET V_RETURN = V_FIRST_CHAR;  
    IF LENGTH( V_FIRST_CHAR) <> CHARACTER_LENGTH( V_FIRST_CHAR ) THEN  
    SET V_RETURN = ELT(INTERVAL(CONV(HEX(LEFT(CONVERT(PARAM USING gbk),1)),16,10),  
        0xB0A1,0xB0C5,0xB2C1,0xB4EE,0xB6EA,0xB7A2,0xB8C1,0xB9FE,0xBBF7,  
        0xBFA6,0xC0AC,0xC2E8,0xC4C3,0xC5B6,0xC5BE,0xC6DA,0xC8BB,  
        0xC8F6,0xCBFA,0xCDDA,0xCEF4,0xD1B9,0xD4D1),  
    'A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','W','X','Y','Z');  
    END IF;  
    RETURN V_RETURN;  
END
;;
DELIMITER ;
