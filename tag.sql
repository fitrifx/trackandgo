-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 17, 2018 at 10:03 AM
-- Server version: 5.5.32
-- PHP Version: 5.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tag`
--
CREATE DATABASE IF NOT EXISTS `tag` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `tag`;

-- --------------------------------------------------------

--
-- Table structure for table `activitylocation`
--

CREATE TABLE IF NOT EXISTS `activitylocation` (
  `activitylocationId` varchar(10) NOT NULL,
  `activityName` varchar(20) DEFAULT NULL,
  `locationId` varchar(10) DEFAULT NULL,
  `level` varchar(10) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `activityLat` varchar(11) NOT NULL,
  `activityLong` varchar(11) NOT NULL,
  `activityState` varchar(50) NOT NULL,
  `activityDistrict` varchar(50) NOT NULL,
  `activityShortDesc` varchar(50) NOT NULL,
  `activityPic` varchar(50) NOT NULL,
  `noTelResp` varchar(50) NOT NULL,
  `nameTelResp` varchar(100) NOT NULL,
  `ppId` varchar(10) NOT NULL,
  PRIMARY KEY (`activitylocationId`),
  KEY `locationId` (`locationId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `activitylocation`
--

INSERT INTO `activitylocation` (`activitylocationId`, `activityName`, `locationId`, `level`, `description`, `activityLat`, `activityLong`, `activityState`, `activityDistrict`, `activityShortDesc`, `activityPic`, `noTelResp`, `nameTelResp`, `ppId`) VALUES
('AL4001', 'Hiking', '0123', 'Easy', 'Are you ready for a 3000 ft height? If yes let''s take a tour to Gunung Chemerong near with Hutan Lipur and Langsir Waterfall. It takes 7 hours to reach the peak of it. Are you up for this challenge?', '4.658539', '103.002660', 'Terengganu', 'Bukit Cemberong', '3000 ft? Are you sure?', 'Gunung Chemerong.jpg', ' 09-6221587', 'Jabatan Perhutanan Negeri Terengganu,\r\nTingkat 8, Wisma Negeri,\r\nKuala Terengganu, Terangganu,\r\n2020', '4001'),
('AL4002', 'Hiking', '0123', 'Medium', 'Great view of sunrise and sunset at the top of the hill. There is a big windmill!!! With the scenery on this top of the hill was just amazing. The source of this island is solar power and wind power. ', '5.909630', '102.745130 ', 'Terengganu', 'Windmills ,Pulau Perhentian', 'Windmills and fantastic blue ocean.', 'pulau perhentian.png', '03- 21448530', 'Pulau Perhentian Besar, 22300 Terengganu,Malaysia', '4002'),
('AL4003', 'Hiking', '0123', 'Medium', 'From Jeti Merang to Pulau Kapas only takes 30 minutes. There are many lounge, hotel and resort if you wanna stay there for 2-3 days with affordable prices. You can enjoy many activities there and of course, Hike!. You can get a majestic view from the top of it.', '5.219212', '103.264915', 'Terengganu', 'Bukit Singa', 'Good value for Good people XD.', 'bukit singa.jpg', '09-6184500', 'Ombak Kapas Island Beach Resort', '4003'),
('AL4004', 'Hiking', '0123', 'Hard', 'If you want a perfect facility, so here is the place. It has jogging tracks, musolla, and toilet on every points. Its located only 6KM from Dungun Town through Dungun Road and near with Forest Reservation Center Bauk Hill.', '4.6967', '103.4122', 'Terengganu', 'Bukit Bauk', 'Hike or Trek?', 'bukit bauk.jpg', '07-7730323', 'Pejabat Perhilitan Bukit Bauk, Terengganu', '4004'),
('AL4005', 'Hiking', '0123', 'Hard', 'This tree hills combined with joy and excitement where you can go to this three hills in one way! Its combined the Chemberong, Berembun and Langsir hills with its stunning Langsir waterfall. Can you take it for 29km of trekking?', '4.65988', '102.98899', 'Terengganu', 'CBL, Dungun', 'Are you ready for triple combo?', 'cbl.jpg', '09-6222444', 'Jabatan Perhutanan Negeri Terengganu,\r\nTingkat 8, Wisma Negeri,\r\nKuala Terengganu, Terangganu', '4005'),
('AL4006', 'Hiking', '0123', 'Easy', '330 meters that are packed with natural floral and fauna that are suitable with all floral lovers and family. To get to the top, it takes only 30 minutes.', '5.4219', '103.0202', 'Terengganu', 'Bukit Maras , Kuala Nerus', 'Packed with floral and Fauna.', 'bukit maras.jpg', '018-7374087', 'Pejabat Perhilitan Terengganu.', '4006'),
('AL4007', 'Hiking', '0129', 'Easy', 'Jeram Linang is a recreational spot that opened early in Pasir Puteh. Takes only 20 Km from Pasir Puteh City.And you can take a bus that cost you for RM 4.00 only and RM 6.00 from Machang.', '5.743232', '102.373311', 'Kelantan', 'Lata Jeram Lenang', 'You can do both and you can do many!', 'Jeram Linang.jpg', '09-9751 042', 'Pejabat Hutan Jajahan,\r\nKelantan Timur,\r\n18500 Machang, Kelantan,', '4007'),
('AL4008', 'Hiking', '0129', 'Medium', 'Mount Yong Yap is a mountain located along the Perak and Kelantan state border in Peninsular Malaysia. At 2,168 m, it is the 6th highest point in Peninsular Malaysia.This mountain is part of the Titiwangsa Rangewhich is an extension of the Tennaserim Range from Thailand.', '4.751497', '101.383419', 'Kelantan', 'Mount Yong Yap', 'The 6th highest point in penusular Malaysia', 'yongyap.jpg', '09-7482140', 'Jabatan Perhutanan Negeri Kelantan \r\nBlok 5, Tingkat 1 \r\nKompleks Kota Darulnaim \r\n15503 Kota Bharu ', '4009'),
('AL4009', 'Hiking', '0126', 'Medium', 'Mount Tahan, at 2,187 m, is the highest point in Peninsular Malaysia. It is located within the Taman Negara national forest, in the state of Pahang. The mountain is part of the Tahan Range in the Tenasserim Hills and is popular with local climbers.', '4.3757', '102.1403', 'Pahang', 'Gunung Tahan', 'One of the toughest treks. ', 'gunungtahan.jpg', '09-573 2911', 'Tingkat 5, Kompleks Tun Razak,, Bandar Indera Mahkota, 25990 Kuantan, Pahang', '4009'),
('AL4010', 'Kayak', '0123', 'Easy', 'The biggest artificial lake in Malaysia with the area of 260000 hectars.There are 30 rivers and 25 waterfall.Other than that, this lake has 8000 of flower species and 1000 species of birds. In short, there are many things you can explore here with the beauty of natural habitat/ ', '5.0040', '102.6388', 'Terengganu', 'Tasik Kenyir', 'Feel the natural beauty!', 'kayaktk.jpg', '09-631 0733', 'Wisma Darul Iman, Tingkat 12, Terengganu, 30503 Kuala Terengganu', '4010'),
('AL4011', 'Kayak', '0129', 'Medium', 'Located 30Km from Gua Musang.This place have a popular fish sanctuary and archeology spot near with Gua Chah and Gua Paralen. You also can enjoy the 30Km journey by kayaking in this river.', '5.893283', '102.185223', 'Kelantan', 'Sungai Neggiri', '30Km of kayaking. Wonderful isn''t?', 'neggiri.jpg', '09-9132200', 'Lembaga Kemajuan Kelantan Selatan,Bandar Gua Musang 18300 Gua Musang Kelantan Darul Naim Malaysia', '4011'),
('AL4012', 'Kayak', '0129', 'Easy', '20Km from Rantau Panjang and this lake has a beautiful scenery especially in evening view and peaceful view. You can enjoy your day by kayaking in here with family and you can do fishing here!', '5.929284', '101.965021', 'Kelantan', 'Tasik Kwong', 'Peace and Steady', 'kwong.jpg', '09-7916777', 'Majlis Daerah Pasir Mas,\r\nKompleks Apam Putra,\r\nBandar Baru Lubok Jong,\r\n17070 Pasir Mas, Kelantan.', '4012'),
('AL4013', 'Kayak', '0126', 'Hard', 'Over at Jeram Besu lies one of the best white water rafting spot in Malaysia . It is a recreational center which consists of chalets & resorts, a small farm with fruit plantations & animals and various outdoor activities available for the travellers.Jeram Besu is famous for its aquatic activities.', '4.016107', '101.937701', 'Pahang', 'Jeram Besu', 'You can do Kayak and Raft!', 'jerambesu.jpg', '016-9893588', 'Wild Lodge Taman Negara,\r\nTaman Negara , Pahang , Malaysia', '4013'),
('AL4014', 'Caving', '0123', 'Medium', 'Located at Tasik Kenyir,Hulu Terengganu.This cave has been a popular places for archeologist for artifact invention and historic objectives. This cave also has a mini museum that showing the process of searching the artifact found here.', '5.0040', '102.6388', 'Terengganu', 'Gua Bewah', 'History and history!', 'gb.jpg', '09-631 0733', 'Wisma Darul Iman, Tingkat 12, Terengganu, 30503 Kuala Terengganu', '4014'),
('AL4016', 'Caving', '0129', 'Easy', 'Gua Ikan is the name of a cave complex at Bukit Batu Kapur about 5 km south of Dabong.There a number of caves here but most are not easy to access and it is recommended to engage a guide in order to appreciate the full extent of this complex.', '5.354370', '102.026900', 'Kelantan', 'Gua Ikan Dabong', 'Fish-shaped cave anyone?', 'gi.jpg', '09-7485512', 'PEJABAT SETIAUSAHA KERAJAAN NEGERI KELANTAN BLOK 2,ARAS 2,15503 KOTA BHARU, KELANTAN', '4016'),
('AL4017', 'Caving', '0126', 'Hard', 'Gua Charas is a temple cave found in a limestone hill (Bukit Charas) about 25km north west of Kuantan, Pahang.It is lucky that this spectacular limestone outcrop contains a temple otherwise it might have shared the same fate as its near neighbour, Bukit Panching .', '3.910039', '103.147306', 'Pahang', 'Gua Charas', 'Limestone cave here!', 'gch.jpg', '', '', '4017'),
('AL4018', 'Caving', '0126', 'Medium', 'Gunung Senyum Caves are located in Pahang about 45 minutes drive from Temerloh.The mountain is riddled with caves, some of which are visible as soon as you pull up in the car park of Gunung Senyum Recreational Forest.', '3.708300', '102.433497', 'Pahang', 'Gua Senyum', 'Multiple caves? ', 'gs.jpg', '09-296 2755', 'Pejabat Hutan Daerah Temerloh,Pahang,Jengka Reserve Forest , 26400 Kuala Krau,Pahang.', '4018');

-- --------------------------------------------------------

--
-- Table structure for table `activitypicpoint`
--

CREATE TABLE IF NOT EXISTS `activitypicpoint` (
  `ppId` int(10) NOT NULL,
  `picone` varchar(50) DEFAULT NULL,
  `pictwo` varchar(50) DEFAULT NULL,
  `picthree` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ppId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `activitypicpoint`
--

INSERT INTO `activitypicpoint` (`ppId`, `picone`, `pictwo`, `picthree`) VALUES
(4001, 'Gunung Chemerong.jpg', 'Gunung Chemerong1.jpg', 'Gunung Chemerong2.jpg'),
(4002, 'pulau perhentian.png', 'pulau perhentian1.jpg', 'pulau perhentian2.jpg'),
(4003, 'bukit singa.jpg', 'bukit singa1.jpg', 'bukit singa2.jpg'),
(4004, 'bukit bauk.jpg', 'bukit bauk2.jpg', 'bukit bauk1.jpg'),
(4005, 'cbl.jpg', 'cbl1.jpg', 'cbl2.jpg'),
(4006, 'bukit maras1.jpg', 'bukit maras2.jpg', 'bukit maras.jpg'),
(4007, 'Jeram Linang.jpg', 'Jeram Linang1.jpg', 'Jeram Linang2.jpg'),
(4008, 'yongyap.jpg', 'yongyap1.jpg', 'yongyap2.jpg'),
(4009, 'gunungtahan.jpg', 'gunungtahan1.jpg', 'gunungtahan2.jpg'),
(4010, 'kayaktk.jpg', 'kayaktk1.jpg', 'kayaktk2.jpg'),
(4011, 'neggiri.jpg', 'neggiri1.jpg', 'neggiri2.jpg'),
(4012, 'kwong.jpg', 'kwong1.jpg', 'kwong2.jpg'),
(4013, 'jerambesu.jpg', 'jerambesu1.jpg', 'jerambesu2.jpg'),
(4014, 'gb.jpg', 'gb1.jpg', 'gb2.jpg'),
(4015, 'gc.jpg', 'gc1.jpg', 'gc2.jpg'),
(4016, 'gi.jpg', 'gi1.jpg', 'gi2.jpg'),
(4017, 'gch.jpg', 'gch1.jpg', 'gch2.jpg'),
(4018, 'gs.jpg', 'gs1.jpg', 'gs2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE IF NOT EXISTS `location` (
  `locationId` varchar(10) NOT NULL,
  `locationState` varchar(30) DEFAULT NULL,
  `codeState` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`locationId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`locationId`, `locationState`, `codeState`) VALUES
('0123', 'Terengganu', 'TRG'),
('0124', 'Johor ', 'JDT'),
('0125', 'Selangor', 'SEL'),
('0126', 'Pahang', 'PHG'),
('0127', 'Perak', 'PRK'),
('0128', 'Negeri Sembilan', 'NGS'),
('0129', 'Kelantan', 'KLN'),
('0130', 'Melaka', 'MLK'),
('0131', 'Kedah', 'KDH'),
('0132', 'Pulau Pinang', 'PNG'),
('0133', 'Perlis', 'PLS');

-- --------------------------------------------------------

--
-- Table structure for table `nearbyservices`
--

CREATE TABLE IF NOT EXISTS `nearbyservices` (
  `nsId` int(10) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `noTel` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`nsId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nearbyservices`
--

INSERT INTO `nearbyservices` (`nsId`, `name`, `noTel`, `address`) VALUES
(1, 'Pejabat Hutan Lipur Chemerong', '013-212 7467', 'Hutan Simpan Pasir Raja, 23000, Dungun, Terengganu'),
(2, 'Perhentian Island Resort', '03-2144 8530', 'Resort Office, Pulau Perhentian Besar, Daerah Besut,22200 Kuala Besut, 50250 Pulau Perhentian'),
(3, 'Alunan Resort', '016-448 8297', 'Petani Beach, Perhentian Island Kecil, Terengganu'),
(4, 'BuBu Villa ', '03-2142 6688', 'Pulau Perhentian Kecil, Besut, Terengganu'),
(5, 'Kapas Coral Beach Resort ', '09-618 3166', 'Pulau Kapas, Kuala Terengganu, Terengganu'),
(6, 'SAUJANA HOTEL DUNGUN', '03 7724 9556 ', 'Lot PT 12982, 83, 84 Hadapan Hospital Dungun Dungun Terengganu'),
(7, 'The Qamar Paka', '03 7724 9556', 'Lot 473 Kampong Cacar Paka Terengganu'),
(8, 'Amanda Homestay Dungun', '019-968 6569', 'Lot 17011 Taman Sura Damai Jalan Masjid Lama, Kg Sura Tengah, 23000 Dungun, Malaysia'),
(9, 'Ikhwah Homestay', '019-290 1006', 'Lot 81732, 21030, Jln Pantai, Kampung Pengkalan Maras, 21300 Kuala Terengganu, Terengganu'),
(10, 'Sang Rerama Homestay, Batu Rakit', '012-736 7293', 'Batu rakit, 21020 Kuala Terengganu, Terengganu'),
(11, 'The Roots Eco Resort', '05-533 5411', 'Batu 10 1/2, Jalan Chemor, Tanjung Rambutan, PK'),
(12, 'Moonriver Lodge', '013-588 1613', 'Jalan Gua Musang - Cameron Highlands, 18300, Kelantan'),
(13, 'Danz Eco Resort', '09-266 3036', 'Kaunter Penerangan & Kraftangan Kuala Tahan, Taman Negara Kuala Tahan, Jerantut, 27000, Pahang'),
(14, 'Petang Island Resort, Kenyir', '09-622 1276', 'Tasik Kenyir, Kuala Berang, Terengganu, Malaysia, 21700');

-- --------------------------------------------------------

--
-- Table structure for table `nservicesloc`
--

CREATE TABLE IF NOT EXISTS `nservicesloc` (
  `alId` varchar(50) NOT NULL DEFAULT '',
  `nsId` int(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`alId`,`nsId`),
  KEY `nsId` (`nsId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nservicesloc`
--

INSERT INTO `nservicesloc` (`alId`, `nsId`) VALUES
('AL4001', 1),
('AL4002', 2),
('AL4002', 3),
('AL4002', 4),
('AL4003', 5),
('AL4004', 6),
('AL4004', 7),
('AL4005', 8),
('AL4006', 9),
('AL4006', 10),
('AL4008', 11),
('AL4008', 12),
('AL4009', 13),
('AL4010', 14);

-- --------------------------------------------------------

--
-- Table structure for table `requirement`
--

CREATE TABLE IF NOT EXISTS `requirement` (
  `userId` varchar(10) NOT NULL DEFAULT '',
  `activitylocationId` varchar(10) NOT NULL DEFAULT '',
  `req1` varchar(10) DEFAULT NULL,
  `req2` varchar(10) DEFAULT NULL,
  `req3` varchar(10) DEFAULT NULL,
  `req4` varchar(10) DEFAULT NULL,
  `req5` varchar(10) DEFAULT NULL,
  `req6` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`userId`,`activitylocationId`),
  KEY `activitylocationId` (`activitylocationId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `requirement`
--

INSERT INTO `requirement` (`userId`, `activitylocationId`, `req1`, `req2`, `req3`, `req4`, `req5`, `req6`) VALUES
('fitrifx', 'AL4012', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE IF NOT EXISTS `review` (
  `userId` varchar(10) NOT NULL DEFAULT '',
  `activitylocationId` varchar(10) NOT NULL DEFAULT '',
  `review` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`userId`,`activitylocationId`,`review`),
  KEY `activitylocationId` (`activitylocationId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`userId`, `activitylocationId`, `review`) VALUES
('fitrifx', 'AL4001', 'Its easy for me. I can take it for 2 hours!'),
('fitrifx', 'AL4002', 'This place is so nice!'),
('amy', 'AL4003', 'So so so nice!!!!'),
('amy', 'AL4006', 'Nice view!'),
('fitrifx', 'AL4008', 'This is what Im looking for!'),
('amy', 'AL4010', 'Very nice!'),
('fitrifx', 'AL4010', 'Suitable for who like to learn basic kayak!'),
('fitrifx', 'AL4011', 'Not so tough, but its okay.'),
('amir', 'AL4012', 'The best place for family!'),
('muhaimin', 'AL4012', 'Nice place to learn kayak. XD'),
('amy', 'AL4018', 'Great places as it have many caves here to explore!');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `userId` varchar(10) NOT NULL DEFAULT '',
  `email` varchar(25) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `currentLocation` varchar(50) DEFAULT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `age` int(50) NOT NULL,
  PRIMARY KEY (`userId`),
  KEY `currentLocation` (`currentLocation`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `email`, `password`, `currentLocation`, `firstname`, `lastname`, `age`) VALUES
('a', 'a@a', 'a', '0123', 'a', 'a', 0),
('aliforreal', 'aliforreal@gmail.com', '1234', '0123', 'Ali', 'Satar', 23),
('amir', 'amir@gmail.com', '1234', '0123', 'amir', 'fitri', 26),
('amy', 'amysearch@matyie.com', '1', '0123', 'amy', 'search', 22),
('fitrifx', 'amir@gmail.com', 'skylab123', '0126', 'Amir', 'Fitri', 22),
('lukmannex', 'lulk@gmail.com', '123', '0129', 'lukman', 'nex', 12),
('muhaimin', 'min@gmail.com', 'skylab123', '0123', 'Muhaimin', 'Abdullah', 26),
('radzishark', 'radzi@gmail.com', 'skylab123', '0123', 'Radzi', 'Shark', 26),
('srul', 'srul@gmail.com', 'srul1234', '0123', 'Shahrul', 'Haniff', 22);

-- --------------------------------------------------------

--
-- Table structure for table `useractivity`
--

CREATE TABLE IF NOT EXISTS `useractivity` (
  `date` date NOT NULL DEFAULT '0000-00-00',
  `time` time NOT NULL DEFAULT '00:00:00',
  `userId` varchar(10) NOT NULL DEFAULT '',
  `activitylocationId` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `date` (`date`),
  UNIQUE KEY `time` (`time`),
  KEY `activitylocationId` (`activitylocationId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `useractivity`
--

INSERT INTO `useractivity` (`date`, `time`, `userId`, `activitylocationId`) VALUES
('2018-08-10', '10:30:00', 'amy', 'AL4003'),
('2018-08-15', '12:04:00', 'fitrifx', 'AL4012'),
('2018-08-06', '04:30:00', 'muhaimin', 'AL4001');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activitylocation`
--
ALTER TABLE `activitylocation`
  ADD CONSTRAINT `activitylocation_ibfk_1` FOREIGN KEY (`locationId`) REFERENCES `location` (`locationId`);

--
-- Constraints for table `nservicesloc`
--
ALTER TABLE `nservicesloc`
  ADD CONSTRAINT `nservicesloc_ibfk_1` FOREIGN KEY (`alId`) REFERENCES `activitylocation` (`activitylocationId`),
  ADD CONSTRAINT `nservicesloc_ibfk_2` FOREIGN KEY (`nsId`) REFERENCES `nearbyservices` (`nsId`);

--
-- Constraints for table `requirement`
--
ALTER TABLE `requirement`
  ADD CONSTRAINT `requirement_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`),
  ADD CONSTRAINT `requirement_ibfk_2` FOREIGN KEY (`activitylocationId`) REFERENCES `activitylocation` (`activitylocationId`);

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`),
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`activitylocationId`) REFERENCES `activitylocation` (`activitylocationId`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`currentLocation`) REFERENCES `location` (`locationId`);

--
-- Constraints for table `useractivity`
--
ALTER TABLE `useractivity`
  ADD CONSTRAINT `useractivity_ibfk_1` FOREIGN KEY (`activitylocationId`) REFERENCES `activitylocation` (`activitylocationId`),
  ADD CONSTRAINT `useractivity_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
