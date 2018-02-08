/*
Navicat MySQL Data Transfer

Source Server         : 47.104.8.66_3306
Source Server Version : 50720
Source Host           : 47.104.8.66:3306
Source Database       : think_tank

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-02-08 14:45:35
*/

SET FOREIGN_KEY_CHECKS=0;

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
-- Records of territory
-- ----------------------------
INSERT INTO `territory` VALUES ('1', '武汉市');
INSERT INTO `territory` VALUES ('2', '仙桃市');
INSERT INTO `territory` VALUES ('3', '十堰市');
INSERT INTO `territory` VALUES ('4', '咸宁市');
INSERT INTO `territory` VALUES ('5', '天门市');
INSERT INTO `territory` VALUES ('6', '孝感市');
INSERT INTO `territory` VALUES ('7', '宜昌市');
INSERT INTO `territory` VALUES ('8', '恩施土家族苗族自治州');
INSERT INTO `territory` VALUES ('9', '潜江市');
INSERT INTO `territory` VALUES ('10', '神农架林区');
INSERT INTO `territory` VALUES ('11', '荆州市');
INSERT INTO `territory` VALUES ('12', '荆门市');
INSERT INTO `territory` VALUES ('13', '襄樊市');
INSERT INTO `territory` VALUES ('14', '鄂州市');
INSERT INTO `territory` VALUES ('15', '随州市');
INSERT INTO `territory` VALUES ('16', '黄冈市');
INSERT INTO `territory` VALUES ('17', '黄石市');
