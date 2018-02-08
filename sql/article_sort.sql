/*
Navicat MySQL Data Transfer

Source Server         : 47.104.8.66_3306
Source Server Version : 50720
Source Host           : 47.104.8.66:3306
Source Database       : think_tank

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-02-08 14:45:14
*/

SET FOREIGN_KEY_CHECKS=0;

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
-- Records of article_sort
-- ----------------------------
INSERT INTO `article_sort` VALUES ('11', '决策热点', '0');
INSERT INTO `article_sort` VALUES ('12', '区域发展战略', '11');
INSERT INTO `article_sort` VALUES ('13', '建成支点走在前列', '11');
INSERT INTO `article_sort` VALUES ('14', '“五个湖北”建设', '11');
INSERT INTO `article_sort` VALUES ('15', '经济建设', '11');
INSERT INTO `article_sort` VALUES ('20', '通知公告', '0');
INSERT INTO `article_sort` VALUES ('21', '通知公告', '20');
INSERT INTO `article_sort` VALUES ('23', '会议集萃', '0');
INSERT INTO `article_sort` VALUES ('24', '智库论坛', '0');
INSERT INTO `article_sort` VALUES ('25', '专题库', '0');
INSERT INTO `article_sort` VALUES ('26', '智库动态', '0');
INSERT INTO `article_sort` VALUES ('28', '智库成果', '0');
INSERT INTO `article_sort` VALUES ('38', '党建', '28');
INSERT INTO `article_sort` VALUES ('39', '国家', '24');
INSERT INTO `article_sort` VALUES ('40', '党建', '25');
INSERT INTO `article_sort` VALUES ('41', '智库要闻', '26');
INSERT INTO `article_sort` VALUES ('42', '党委政府重要会议', '23');
INSERT INTO `article_sort` VALUES ('57', '决策调研', '0');
INSERT INTO `article_sort` VALUES ('58', '决策调研', '57');
INSERT INTO `article_sort` VALUES ('62', '智库政策', '26');
INSERT INTO `article_sort` VALUES ('69', '社会', '28');
INSERT INTO `article_sort` VALUES ('70', '生态', '28');
INSERT INTO `article_sort` VALUES ('71', '经济', '28');
INSERT INTO `article_sort` VALUES ('72', '文化', '28');
INSERT INTO `article_sort` VALUES ('73', '热点专题', '28');
INSERT INTO `article_sort` VALUES ('74', '国际关系', '28');
INSERT INTO `article_sort` VALUES ('75', '社会', '25');
INSERT INTO `article_sort` VALUES ('76', '生态', '25');
INSERT INTO `article_sort` VALUES ('77', '政治', '25');
INSERT INTO `article_sort` VALUES ('78', '经济', '25');
INSERT INTO `article_sort` VALUES ('79', '文化', '25');
INSERT INTO `article_sort` VALUES ('80', '热点专题', '25');
INSERT INTO `article_sort` VALUES ('81', '国际关系', '25');
INSERT INTO `article_sort` VALUES ('82', '政治建设', '11');
INSERT INTO `article_sort` VALUES ('83', '社会建设', '11');
INSERT INTO `article_sort` VALUES ('84', '文化建设', '11');
INSERT INTO `article_sort` VALUES ('85', '生态文明建设', '11');
INSERT INTO `article_sort` VALUES ('86', '创新发展', '11');
INSERT INTO `article_sort` VALUES ('87', '地方治理', '11');
INSERT INTO `article_sort` VALUES ('88', '全面小康', '11');
INSERT INTO `article_sort` VALUES ('89', '党的建设', '11');
INSERT INTO `article_sort` VALUES ('90', '智库相关研讨会', '23');
INSERT INTO `article_sort` VALUES ('91', '省', '24');
INSERT INTO `article_sort` VALUES ('92', '市', '24');
INSERT INTO `article_sort` VALUES ('93', '县', '24');
INSERT INTO `article_sort` VALUES ('94', '文献库', '0');
INSERT INTO `article_sort` VALUES ('95', '专家文献', '94');
INSERT INTO `article_sort` VALUES ('96', '演讲', '94');
INSERT INTO `article_sort` VALUES ('97', '研究成果', '94');
INSERT INTO `article_sort` VALUES ('98', '调研报告', '94');
INSERT INTO `article_sort` VALUES ('99', '市场数据', '94');
INSERT INTO `article_sort` VALUES ('105', '七大智库', '0');
INSERT INTO `article_sort` VALUES ('106', '党政智库', '105');
INSERT INTO `article_sort` VALUES ('107', '社科院智库', '105');
INSERT INTO `article_sort` VALUES ('108', '党校智库', '105');
INSERT INTO `article_sort` VALUES ('109', '省级专门智库', '105');
INSERT INTO `article_sort` VALUES ('110', '省级改革智库', '105');
INSERT INTO `article_sort` VALUES ('111', '高校智库', '105');
INSERT INTO `article_sort` VALUES ('112', '社会智库', '105');
INSERT INTO `article_sort` VALUES ('113', '资讯库', '0');
INSERT INTO `article_sort` VALUES ('114', '专家文献', '113');
INSERT INTO `article_sort` VALUES ('115', '演讲', '113');
INSERT INTO `article_sort` VALUES ('116', '著作', '113');
INSERT INTO `article_sort` VALUES ('117', '研究成果', '113');
INSERT INTO `article_sort` VALUES ('118', '调研报告', '113');
INSERT INTO `article_sort` VALUES ('119', '市场数据', '113');
INSERT INTO `article_sort` VALUES ('120', '研究项目', '0');
INSERT INTO `article_sort` VALUES ('121', '研究计划', '120');
INSERT INTO `article_sort` VALUES ('122', '工作调研', '120');
INSERT INTO `article_sort` VALUES ('123', '内部课程', '120');
INSERT INTO `article_sort` VALUES ('124', '委托课程', '120');
INSERT INTO `article_sort` VALUES ('125', '研究成果', '0');
INSERT INTO `article_sort` VALUES ('127', '内部报告', '125');
INSERT INTO `article_sort` VALUES ('128', '学术论文', '125');
INSERT INTO `article_sort` VALUES ('129', '专业著作', '125');
INSERT INTO `article_sort` VALUES ('130', '成果汇编', '125');
INSERT INTO `article_sort` VALUES ('131', '出版物', '0');
INSERT INTO `article_sort` VALUES ('132', '内部刊物', '131');
INSERT INTO `article_sort` VALUES ('133', '外部刊物', '131');
