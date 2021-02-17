-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: weread
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sub_category`
--

DROP TABLE IF EXISTS `sub_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_category` (
  `sid` int NOT NULL AUTO_INCREMENT,
  `sname` char(10) NOT NULL,
  `pid` int NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_category`
--

LOCK TABLES `sub_category` WRITE;
/*!40000 ALTER TABLE `sub_category` DISABLE KEYS */;
INSERT INTO `sub_category` VALUES (1,'东方玄幻榜',1),(2,'都市小说榜',1),(3,'仙侠武侠榜',1),(4,'异界大陆榜',1),(5,'异术超能榜',1),(6,'玄幻奇幻榜',1),(7,'同人二次元榜',1),(8,'历史架空榜',1),(9,'游戏竞技榜',1),(10,'科幻未来榜',1),(11,'时空穿梭榜',1),(12,'悬疑灵异榜',1),(13,'军事小说榜',1),(14,'穿越架空榜',2),(15,'豪门世家榜',2),(16,'现代言情榜',2),(17,'玄幻言情榜',2),(18,'古代言情榜',2),(19,'快穿小说榜',2),(20,'宫闱宅斗榜',2),(21,'仙侠奇缘榜',2),(22,'重生异能榜',2),(23,'经商种田榜',2),(24,'青春言情榜',2),(25,'科幻神秘榜',2),(26,'游戏同人榜',2),(27,'热门影视',4),(28,'高分影视',4),(29,'最新播映',4),(30,'国产影视',4),(31,'海外影视',4),(32,'影视综合',4),(33,'明星传记',4),(34,'侦探推理',6),(35,'恐怖惊悚',6),(36,'世界名著',8),(37,'古典小说',8),(38,'外国经典',8),(39,'随笔',11),(40,'文集',11),(41,'传记',11),(42,'诗歌',11),(43,'文学理论',11),(44,'纪实文学',11),(45,'戏剧',11),(46,'民间文学',11),(47,'艺术',11),(48,'人生哲学',12),(49,'职场',12),(50,'沟通表达',12),(51,'情绪心灵',12),(52,'认知思维',12),(53,'两性婚姻',12),(54,'励志',12),(55,'心理学',13),(56,'哲学',13),(57,'社会',13),(58,'文化',13),(59,'宗教',13),(60,'人类',13),(61,'法律法规',13),(62,'法律读物',13),(63,'中国史',14),(64,'历史小说',14),(65,'历史人物',14),(66,'世界史',14),(67,'历史典籍',14),(68,'历史随笔',14),(69,'健康',15),(70,'美食',15),(71,'时尚美容',15),(72,'居家',15),(73,'旅游',15),(74,'游戏',15),(75,'星座占卜',15),(76,'手工',15),(77,'经济学著作',16),(78,'财经人物',16),(79,'经济管理',16),(80,'理财',16),(81,'育儿家教',17),(82,'少儿教育',17),(83,'外语',17),(84,'教辅',17),(85,'考试',17),(86,'体育',17),(87,'英文书',17),(88,'工具书',17),(89,'政治',18),(90,'军事',18),(91,'计算机',19),(92,'自然科学',19),(93,'医学',19),(94,'工业技术',19),(95,'建筑',19),(96,'农林牧业',19);
/*!40000 ALTER TABLE `sub_category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-17 14:05:18
