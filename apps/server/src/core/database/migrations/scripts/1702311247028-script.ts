import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('f0accad2-9bc1-4381-9b32-a65f53211dc1', '1Laurie65@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=3', 'cus_P9q8r7s6t5u4v3w2', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('06bcfe9b-d3f8-4838-a940-5a7cd2b98ae3', '8Edwardo_Bradtke47@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=10', 'cus_P9q8r7s6t5u4v3w2', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('00e6fac5-7f54-466b-b38d-18a6119125c9', '22Gene.Lesch@yahoo.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=24', 'cus_J0y6g7h8k9l0m1n2', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('c4a1954f-a68a-42a2-bc8d-8d950c43e06e', '29Meagan_Hoeger78@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=31', 'cus_P9q8r7s6t5u4v3w2', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('13511a58-d57b-49eb-a464-0ed003c6a8f2', '36Orie_Ondricka@hotmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=38', 'cus_K9l8m7n6o5p4q3r2', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('bc2d0cf5-41c0-4835-b252-cc42771afdf8', '43Pedro9@hotmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=45', 'cus_K9l8m7n6o5p4q3r2', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('f2f16512-49af-45f8-9bda-b1701c1ff9e8', '50Nayeli.Smith57@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=52', 'cus_J0y6g7h8k9l0m1n2', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('022056d7-f3d0-475e-a4ba-c36e1c1cd3d9', '57Maryjane35@hotmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=59', 'cus_J0y6g7h8k9l0m1n2', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('8cac2234-da91-4b41-aadd-dcef90578149', '64Devonte.Kulas@gmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=66', 'cus_X1y2z3a4b5c6d7e8', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('02a3c10f-1334-44b4-9ea2-7fe26e4d62dd', 'Room Reservation Confirmed', 'Enjoy a special discount on your next stay with us.', 'Guest Relations', '74Stan3@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=75', 'https://i.imgur.com/YfJQV5z.png?id=76', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('ee1454e9-228e-40fc-aea8-4fa97ed899ad', 'Room Upgrade Available', 'We have added new amenities for your comfort.', 'Customer Service', '81Clark.White@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=82', 'https://i.imgur.com/YfJQV5z.png?id=83', '13511a58-d57b-49eb-a464-0ed003c6a8f2');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('3314ede7-3d25-43bc-a75f-2667329063ba', 'Special Discount Offer', 'Your invoice for the recent stay is now available.', 'Billing Department', '88Roberta.Mann@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=89', 'https://i.imgur.com/YfJQV5z.png?id=90', 'f2f16512-49af-45f8-9bda-b1701c1ff9e8');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('8795e27b-0b7f-46a1-b4c2-f76c4e7ffce4', 'Special Discount Offer', 'You are eligible for a complimentary room upgrade.', 'Guest Relations', '95Jovan43@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=96', 'https://i.imgur.com/YfJQV5z.png?id=97', 'c4a1954f-a68a-42a2-bc8d-8d950c43e06e');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('b3f40bdd-91e1-4dff-adc7-b5f021f8dee1', 'Invoice Ready', 'Enjoy a special discount on your next stay with us.', 'Guest Relations', '102Erica53@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=103', 'https://i.imgur.com/YfJQV5z.png?id=104', '022056d7-f3d0-475e-a4ba-c36e1c1cd3d9');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('1ea78954-3259-43d0-a856-d17e28e4009f', 'Room Upgrade Available', 'Enjoy a special discount on your next stay with us.', 'Customer Service', '109Tess8@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=110', 'https://i.imgur.com/YfJQV5z.png?id=111', 'bc2d0cf5-41c0-4835-b252-cc42771afdf8');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('53b829e2-e972-4037-928c-9e35bfd55f29', 'Room Reservation Confirmed', 'Your invoice for the recent stay is now available.', 'Front Desk', '116Ed46@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=117', 'https://i.imgur.com/YfJQV5z.png?id=118', 'c4a1954f-a68a-42a2-bc8d-8d950c43e06e');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('9fcc2dc5-31b2-4c83-96f7-24595008e9c9', 'New Amenities Added', 'Your invoice for the recent stay is now available.', 'Front Desk', '123Cassandre19@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=124', 'https://i.imgur.com/YfJQV5z.png?id=125', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('03b4c99a-f77b-4c60-816b-9de9d6d6b60d', 'Room Upgrade Available', 'Enjoy a special discount on your next stay with us.', 'Guest Relations', '130Hellen_Koch@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=131', 'https://i.imgur.com/YfJQV5z.png?id=132', 'bc2d0cf5-41c0-4835-b252-cc42771afdf8');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('2d825740-7759-46d7-b376-15baa9008008', 'Room Upgrade Available', 'You are eligible for a complimentary room upgrade.', 'Billing Department', '137Adan68@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=138', 'https://i.imgur.com/YfJQV5z.png?id=139', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "hotel" ("id", "name", "address", "description", "amenities") VALUES ('6221e842-9945-409b-ac38-d24d08a490ce', 'City Center Inn', '142 18 Spring St, New York, NY 10012', 'A luxurious hotel with stunning views and topnotch amenities.', 'Hiking Trails Fireplace Hot Tub PetFriendly');
INSERT INTO "hotel" ("id", "name", "address", "description", "amenities") VALUES ('65b5f0dc-ab6c-441f-a924-9d0689262a01', 'City Center Inn', '147 18 Spring St, New York, NY 10012', 'A luxurious hotel with stunning views and topnotch amenities.', 'Boat Rentals Fishing Picnic Area Complimentary Breakfast');
INSERT INTO "hotel" ("id", "name", "address", "description", "amenities") VALUES ('863489c2-8e03-4f11-9aa2-0890d43b4dc4', 'Oceanview Resort', '152 443 E 6th St, New York, NY 10009', 'A modern inn located in the heart of the city close to all major attractions.', 'Free WiFi Swimming Pool Spa Gym');
INSERT INTO "hotel" ("id", "name", "address", "description", "amenities") VALUES ('ad814293-908a-4a33-a695-d23521bc1019', 'City Center Inn', '157 430 Lafayette St, New York, NY 10003', 'A luxurious hotel with stunning views and topnotch amenities.', 'Free WiFi Swimming Pool Spa Gym');
INSERT INTO "hotel" ("id", "name", "address", "description", "amenities") VALUES ('ebd93ca1-a438-44e3-9bfa-d0e843da2c74', 'Lakeside Hotel', '162 18 W 29th St, New York, NY 10001', 'A serene lodge nestled in the mountains perfect for a getaway.', 'Free WiFi Swimming Pool Spa Gym');
INSERT INTO "hotel" ("id", "name", "address", "description", "amenities") VALUES ('36f19b8d-580c-47ba-955e-b4baaec76485', 'City Center Inn', '167 18 Spring St, New York, NY 10012', 'A cozy resort offering a relaxing stay by the ocean.', 'Free WiFi Swimming Pool Spa Gym');
INSERT INTO "hotel" ("id", "name", "address", "description", "amenities") VALUES ('81a0f304-a363-40ed-a664-b7ceff8ea350', 'Lakeside Hotel', '172 18 Spring St, New York, NY 10012', 'A luxurious hotel with stunning views and topnotch amenities.', 'Boat Rentals Fishing Picnic Area Complimentary Breakfast');
INSERT INTO "hotel" ("id", "name", "address", "description", "amenities") VALUES ('77a789c3-3be4-446b-8184-7300022c90c2', 'City Center Inn', '177 91 Christopher St, New York, NY 10014', 'A luxurious hotel with stunning views and topnotch amenities.', 'Beach Access Restaurant Bar Free Parking');
INSERT INTO "hotel" ("id", "name", "address", "description", "amenities") VALUES ('51aa7deb-8354-4c50-ac67-78f13fb3facc', 'Lakeside Hotel', '182 443 E 6th St, New York, NY 10009', 'A luxurious hotel with stunning views and topnotch amenities.', 'Hiking Trails Fireplace Hot Tub PetFriendly');
INSERT INTO "hotel" ("id", "name", "address", "description", "amenities") VALUES ('4a492616-b72a-43b5-b143-41fd6c0fec17', 'Grand Plaza Hotel', '187 330 W Broadway, New York, NY 10013', 'A modern inn located in the heart of the city close to all major attractions.', 'Hiking Trails Fireplace Hot Tub PetFriendly');

INSERT INTO "room" ("id", "roomNumber", "type", "price", "availabilityStatus", "hotelId") VALUES ('fbfbeb60-ad3a-485d-b515-e683575c1826', '505', 'Double', 0, 'Reserved', '77a789c3-3be4-446b-8184-7300022c90c2');
INSERT INTO "room" ("id", "roomNumber", "type", "price", "availabilityStatus", "hotelId") VALUES ('b39a975b-1645-42ba-b741-6baeedb1a8be', '404', 'Single', 693, 'Occupied', '51aa7deb-8354-4c50-ac67-78f13fb3facc');
INSERT INTO "room" ("id", "roomNumber", "type", "price", "availabilityStatus", "hotelId") VALUES ('6b75aae0-377a-4430-baa0-4f2e811684c4', '505', 'Suite', 400, 'Reserved', '36f19b8d-580c-47ba-955e-b4baaec76485');
INSERT INTO "room" ("id", "roomNumber", "type", "price", "availabilityStatus", "hotelId") VALUES ('b021e399-00d8-4cde-8679-a4d708c449c1', '101', 'Single', 798, 'Occupied', 'ebd93ca1-a438-44e3-9bfa-d0e843da2c74');
INSERT INTO "room" ("id", "roomNumber", "type", "price", "availabilityStatus", "hotelId") VALUES ('ee04b204-a9e4-46cb-83e4-cd2a3f6bf9e4', '303', 'Deluxe', 539, 'Available', '65b5f0dc-ab6c-441f-a924-9d0689262a01');
INSERT INTO "room" ("id", "roomNumber", "type", "price", "availabilityStatus", "hotelId") VALUES ('f3017fc8-19ee-4399-b54d-4fd83c21e28a', '202', 'Single', 982, 'Reserved', 'ad814293-908a-4a33-a695-d23521bc1019');
INSERT INTO "room" ("id", "roomNumber", "type", "price", "availabilityStatus", "hotelId") VALUES ('e7a3f71b-4c9b-4866-93c0-29d9fb778215', '303', 'Family', 30, 'Reserved', '863489c2-8e03-4f11-9aa2-0890d43b4dc4');
INSERT INTO "room" ("id", "roomNumber", "type", "price", "availabilityStatus", "hotelId") VALUES ('6e5bc5f1-af23-4206-8aee-04633459258d', '303', 'Double', 473, 'Reserved', '863489c2-8e03-4f11-9aa2-0890d43b4dc4');
INSERT INTO "room" ("id", "roomNumber", "type", "price", "availabilityStatus", "hotelId") VALUES ('1fc081b6-8b2a-49cb-a3e4-69aac6e0287a', '404', 'Single', 293, 'Under Maintenance', '77a789c3-3be4-446b-8184-7300022c90c2');
INSERT INTO "room" ("id", "roomNumber", "type", "price", "availabilityStatus", "hotelId") VALUES ('d9bf5a17-1557-4b30-8f96-21a9d2389d15', '101', 'Deluxe', 830, 'Under Maintenance', '51aa7deb-8354-4c50-ac67-78f13fb3facc');

INSERT INTO "reservation" ("id", "checkInDate", "checkOutDate", "status", "userId", "roomId") VALUES ('ab4746ff-c568-487f-a554-47556a06608c', '2024-07-17T21:29:52.158Z', '2024-11-24T18:17:34.730Z', 'pending', '13511a58-d57b-49eb-a464-0ed003c6a8f2', '6e5bc5f1-af23-4206-8aee-04633459258d');
INSERT INTO "reservation" ("id", "checkInDate", "checkOutDate", "status", "userId", "roomId") VALUES ('ccdcd60b-6c5a-4b2b-a134-39e00c479179', '2024-02-02T21:59:04.355Z', '2025-03-13T20:41:39.522Z', 'confirmed', '8cac2234-da91-4b41-aadd-dcef90578149', 'ee04b204-a9e4-46cb-83e4-cd2a3f6bf9e4');
INSERT INTO "reservation" ("id", "checkInDate", "checkOutDate", "status", "userId", "roomId") VALUES ('fa961aa8-f053-4832-bc50-4acae4949871', '2024-09-16T09:04:04.803Z', '2023-09-15T12:50:05.807Z', 'cancelled', '00e6fac5-7f54-466b-b38d-18a6119125c9', 'b39a975b-1645-42ba-b741-6baeedb1a8be');
INSERT INTO "reservation" ("id", "checkInDate", "checkOutDate", "status", "userId", "roomId") VALUES ('8a1e62aa-ade9-4c6a-bbda-20027abf5da5', '2024-06-06T03:11:43.203Z', '2025-02-15T18:20:11.596Z', 'checkedin', '022056d7-f3d0-475e-a4ba-c36e1c1cd3d9', 'ee04b204-a9e4-46cb-83e4-cd2a3f6bf9e4');
INSERT INTO "reservation" ("id", "checkInDate", "checkOutDate", "status", "userId", "roomId") VALUES ('81be8505-2e17-49f6-89cd-a4e9e71ac04f', '2024-04-30T23:57:09.366Z', '2025-01-05T21:07:37.061Z', 'pending', '022056d7-f3d0-475e-a4ba-c36e1c1cd3d9', 'e7a3f71b-4c9b-4866-93c0-29d9fb778215');
INSERT INTO "reservation" ("id", "checkInDate", "checkOutDate", "status", "userId", "roomId") VALUES ('5b124fa4-1fc7-443f-b44e-a7efa14eba7b', '2023-07-08T11:21:54.199Z', '2024-12-06T20:43:56.739Z', 'pending', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e7a3f71b-4c9b-4866-93c0-29d9fb778215');
INSERT INTO "reservation" ("id", "checkInDate", "checkOutDate", "status", "userId", "roomId") VALUES ('3c746b63-14fc-4869-9697-2438a9ed13d2', '2025-01-28T14:18:41.038Z', '2025-02-11T12:48:25.795Z', 'pending', '8cac2234-da91-4b41-aadd-dcef90578149', 'd9bf5a17-1557-4b30-8f96-21a9d2389d15');
INSERT INTO "reservation" ("id", "checkInDate", "checkOutDate", "status", "userId", "roomId") VALUES ('6b824226-5407-4bf0-aa46-01b2ecc0e623', '2024-12-18T02:41:52.070Z', '2024-10-08T23:30:55.949Z', 'checkedin', 'f0accad2-9bc1-4381-9b32-a65f53211dc1', 'd9bf5a17-1557-4b30-8f96-21a9d2389d15');
INSERT INTO "reservation" ("id", "checkInDate", "checkOutDate", "status", "userId", "roomId") VALUES ('d908d406-eb6e-428f-afa1-39379724ea79', '2024-04-12T05:17:50.821Z', '2024-11-19T21:49:43.906Z', 'checkedout', '022056d7-f3d0-475e-a4ba-c36e1c1cd3d9', 'e7a3f71b-4c9b-4866-93c0-29d9fb778215');
INSERT INTO "reservation" ("id", "checkInDate", "checkOutDate", "status", "userId", "roomId") VALUES ('ef857b7f-2fff-48ae-a004-93da6f3e68e8', '2025-05-03T13:14:46.141Z', '2023-07-04T17:04:19.107Z', 'pending', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'ee04b204-a9e4-46cb-83e4-cd2a3f6bf9e4');

INSERT INTO "invoice" ("id", "totalAmount", "issueDate", "reservationId") VALUES ('e6340223-6ab0-46a9-af91-2d4ca38630e1', 808, '2024-04-05T02:14:04.664Z', '3c746b63-14fc-4869-9697-2438a9ed13d2');
INSERT INTO "invoice" ("id", "totalAmount", "issueDate", "reservationId") VALUES ('df74b858-7d30-4889-85be-57607723593b', 154, '2023-07-19T08:13:57.586Z', 'ef857b7f-2fff-48ae-a004-93da6f3e68e8');
INSERT INTO "invoice" ("id", "totalAmount", "issueDate", "reservationId") VALUES ('33d8c814-45cc-4439-9742-af0b15d35399', 149, '2024-03-28T15:38:47.870Z', 'd908d406-eb6e-428f-afa1-39379724ea79');
INSERT INTO "invoice" ("id", "totalAmount", "issueDate", "reservationId") VALUES ('c0ff0f51-30f6-40a6-b426-f9758b97c3f2', 306, '2023-07-07T00:46:35.027Z', 'ccdcd60b-6c5a-4b2b-a134-39e00c479179');
INSERT INTO "invoice" ("id", "totalAmount", "issueDate", "reservationId") VALUES ('9df7842f-2bca-4a67-8e83-cccdd90b971f', 750, '2024-07-14T21:17:06.149Z', 'ccdcd60b-6c5a-4b2b-a134-39e00c479179');
INSERT INTO "invoice" ("id", "totalAmount", "issueDate", "reservationId") VALUES ('8ec9bcaa-b1fb-46b7-9d35-a331123790a2', 271, '2024-02-22T05:45:27.215Z', 'ab4746ff-c568-487f-a554-47556a06608c');
INSERT INTO "invoice" ("id", "totalAmount", "issueDate", "reservationId") VALUES ('df24d1e5-2908-48ab-8928-b10ae3978e43', 935, '2024-04-19T12:37:54.637Z', 'fa961aa8-f053-4832-bc50-4acae4949871');
INSERT INTO "invoice" ("id", "totalAmount", "issueDate", "reservationId") VALUES ('cee44d55-86bc-480f-8ac0-1ba61b18e905', 679, '2024-07-21T14:30:08.701Z', 'ef857b7f-2fff-48ae-a004-93da6f3e68e8');
INSERT INTO "invoice" ("id", "totalAmount", "issueDate", "reservationId") VALUES ('8574a5f2-201c-4f35-b6fd-39f2eb9222a9', 228, '2024-09-27T00:16:43.901Z', 'ccdcd60b-6c5a-4b2b-a134-39e00c479179');
INSERT INTO "invoice" ("id", "totalAmount", "issueDate", "reservationId") VALUES ('d627542f-3b1f-4f79-b4da-226158c4459f', 589, '2024-03-20T08:45:01.790Z', '8a1e62aa-ade9-4c6a-bbda-20027abf5da5');

INSERT INTO "store_item" ("id", "name", "quantity", "price") VALUES ('f3fdc6f7-1b56-4f35-b1bc-bdd3a74dd9ba', 'Toothpaste', 749, 370);
INSERT INTO "store_item" ("id", "name", "quantity", "price") VALUES ('5aeeb835-82f9-433b-a9f3-0e5fe3ecb93a', 'Towel', 997, 998);
INSERT INTO "store_item" ("id", "name", "quantity", "price") VALUES ('ebb4d3bf-378f-42ef-a674-54bcd87e7422', 'Towel', 605, 884);
INSERT INTO "store_item" ("id", "name", "quantity", "price") VALUES ('b5a2481d-ef16-4a2f-ac09-a72b5f558f01', 'Slippers', 735, 25);
INSERT INTO "store_item" ("id", "name", "quantity", "price") VALUES ('8153599d-c8b2-4ff0-bc6e-41717c39d72b', 'Slippers', 429, 315);
INSERT INTO "store_item" ("id", "name", "quantity", "price") VALUES ('51f48cd8-48c5-475c-b231-bb7f0c3214c9', 'Toothpaste', 760, 638);
INSERT INTO "store_item" ("id", "name", "quantity", "price") VALUES ('63c22e05-6822-44ab-b61a-5fe2d2c57c0a', 'Bathrobe', 804, 773);
INSERT INTO "store_item" ("id", "name", "quantity", "price") VALUES ('7a548108-a07e-40d2-9e4d-90f17f3be88b', 'Shampoo', 141, 901);
INSERT INTO "store_item" ("id", "name", "quantity", "price") VALUES ('e6901868-0cc8-4dd0-8246-e09d6a600a66', 'Toothpaste', 708, 150);
INSERT INTO "store_item" ("id", "name", "quantity", "price") VALUES ('2d9ba0c1-2306-40da-beb9-1baaabcd7c7a', 'Slippers', 407, 375);

INSERT INTO "employee" ("id", "name", "email", "phone", "position", "salary") VALUES ('0d544c87-81ef-4dee-bb59-31dc414021b9', 'Jane Smith', '352Myron.Labadie@yahoo.com', '1122334455', 'Chef', 32);
INSERT INTO "employee" ("id", "name", "email", "phone", "position", "salary") VALUES ('157763dc-127e-4920-8fa2-3257ec70bbc6', 'John Doe', '358Melba67@yahoo.com', '0987654321', 'Manager', 517);
INSERT INTO "employee" ("id", "name", "email", "phone", "position", "salary") VALUES ('64a45631-a49b-4ecc-8463-47dc4992113c', 'Jane Smith', '364Destany.Casper44@yahoo.com', '1122334455', 'Receptionist', 41);
INSERT INTO "employee" ("id", "name", "email", "phone", "position", "salary") VALUES ('249f3e67-48dd-4452-886d-73ba40992412', 'John Doe', '370Shania23@gmail.com', '6677889900', 'Receptionist', 111);
INSERT INTO "employee" ("id", "name", "email", "phone", "position", "salary") VALUES ('4b390d34-4d89-4383-bd53-521305d261b0', 'Jane Smith', '376Meghan99@hotmail.com', '1234567890', 'Receptionist', 958);
INSERT INTO "employee" ("id", "name", "email", "phone", "position", "salary") VALUES ('49b67bac-78ad-4096-962f-25c674adfee5', 'Michael Johnson', '382August.Gerhold77@yahoo.com', '6677889900', 'Maintenance', 33);
INSERT INTO "employee" ("id", "name", "email", "phone", "position", "salary") VALUES ('eb8e0820-a632-4c2f-a54f-12cb2eb3e316', 'John Doe', '388Molly.Roob78@yahoo.com', '1234567890', 'Manager', 316);
INSERT INTO "employee" ("id", "name", "email", "phone", "position", "salary") VALUES ('b0db50e5-bf9f-461b-b20b-667cc57e5cbd', 'Robert Brown', '394Willis_Jacobson21@yahoo.com', '0987654321', 'Chef', 570);
INSERT INTO "employee" ("id", "name", "email", "phone", "position", "salary") VALUES ('c9035a37-becb-48f0-8d98-501abd97cb7b', 'Robert Brown', '400Rozella.Cassin83@yahoo.com', '1234567890', 'Manager', 4);
INSERT INTO "employee" ("id", "name", "email", "phone", "position", "salary") VALUES ('8e63a857-1fb2-4455-9423-802a4bbfb229', 'John Doe', '406Dortha61@gmail.com', '1122334455', 'Maintenance', 754);

INSERT INTO "holiday" ("id", "startDate", "endDate", "employeeId") VALUES ('2bc113b2-6b46-4fb6-ad10-19099a85883d', '2023-07-08T20:23:24.463Z', '2025-03-07T15:46:26.399Z', '8e63a857-1fb2-4455-9423-802a4bbfb229');
INSERT INTO "holiday" ("id", "startDate", "endDate", "employeeId") VALUES ('a75ac3eb-64b0-41fc-89b4-662e5d43e595', '2024-04-20T23:40:40.544Z', '2025-02-20T03:53:11.826Z', '249f3e67-48dd-4452-886d-73ba40992412');
INSERT INTO "holiday" ("id", "startDate", "endDate", "employeeId") VALUES ('97bbd865-015e-4e18-9e00-004b33a031f5', '2023-06-17T23:42:49.536Z', '2024-04-14T16:44:00.699Z', '0d544c87-81ef-4dee-bb59-31dc414021b9');
INSERT INTO "holiday" ("id", "startDate", "endDate", "employeeId") VALUES ('8179dcac-7c6d-47c5-8cc8-4ca7eb56ee5e', '2023-09-22T02:32:39.743Z', '2025-01-17T19:03:28.977Z', 'b0db50e5-bf9f-461b-b20b-667cc57e5cbd');
INSERT INTO "holiday" ("id", "startDate", "endDate", "employeeId") VALUES ('9a2f824d-7dc3-4381-80d2-1cd868a520b9', '2024-12-12T16:45:35.547Z', '2024-01-15T14:11:17.111Z', 'c9035a37-becb-48f0-8d98-501abd97cb7b');
INSERT INTO "holiday" ("id", "startDate", "endDate", "employeeId") VALUES ('11cf0d3f-170c-41b1-b5b0-bd28af5e2917', '2024-07-05T07:00:39.875Z', '2023-12-14T13:27:14.660Z', '8e63a857-1fb2-4455-9423-802a4bbfb229');
INSERT INTO "holiday" ("id", "startDate", "endDate", "employeeId") VALUES ('089e9692-4a16-4fc4-ade9-cf3672bd20e6', '2024-09-08T06:29:14.252Z', '2024-06-30T12:07:32.005Z', '4b390d34-4d89-4383-bd53-521305d261b0');
INSERT INTO "holiday" ("id", "startDate", "endDate", "employeeId") VALUES ('7cd92171-f0ff-4871-a3e9-a9a9d0510926', '2024-11-07T17:04:51.624Z', '2025-03-10T17:00:29.748Z', '8e63a857-1fb2-4455-9423-802a4bbfb229');
INSERT INTO "holiday" ("id", "startDate", "endDate", "employeeId") VALUES ('269c3488-5cfd-4a62-9ecd-7c993eb41658', '2023-07-31T07:37:10.259Z', '2024-11-16T08:10:02.791Z', '4b390d34-4d89-4383-bd53-521305d261b0');
INSERT INTO "holiday" ("id", "startDate", "endDate", "employeeId") VALUES ('8422f07a-1244-4ba0-9853-56d1e0a0090d', '2024-01-22T02:57:23.424Z', '2024-11-02T13:12:32.625Z', '64a45631-a49b-4ecc-8463-47dc4992113c');

INSERT INTO "performance_report" ("id", "reportDate", "performanceScore", "employeeId") VALUES ('2d1ba461-4baf-466f-87eb-1be905200fbd', '2024-05-08T07:14:11.153Z', 254, 'eb8e0820-a632-4c2f-a54f-12cb2eb3e316');
INSERT INTO "performance_report" ("id", "reportDate", "performanceScore", "employeeId") VALUES ('471332d1-cc4b-48f5-9b88-8062e2f65085', '2024-06-28T11:15:03.855Z', 431, 'c9035a37-becb-48f0-8d98-501abd97cb7b');
INSERT INTO "performance_report" ("id", "reportDate", "performanceScore", "employeeId") VALUES ('1c2673b0-1729-4744-82cb-9c200e769629', '2024-10-16T07:47:04.098Z', 318, '0d544c87-81ef-4dee-bb59-31dc414021b9');
INSERT INTO "performance_report" ("id", "reportDate", "performanceScore", "employeeId") VALUES ('6775e70e-16c8-4249-a63b-bcb7aec2c964', '2024-03-24T01:45:28.190Z', 186, '157763dc-127e-4920-8fa2-3257ec70bbc6');
INSERT INTO "performance_report" ("id", "reportDate", "performanceScore", "employeeId") VALUES ('70612bf4-8b4c-42a6-b005-0d5851470d5e', '2025-02-02T07:24:45.948Z', 61, 'c9035a37-becb-48f0-8d98-501abd97cb7b');
INSERT INTO "performance_report" ("id", "reportDate", "performanceScore", "employeeId") VALUES ('0cb334da-864e-4250-b0c5-24893027e007', '2025-01-31T01:38:02.731Z', 656, '64a45631-a49b-4ecc-8463-47dc4992113c');
INSERT INTO "performance_report" ("id", "reportDate", "performanceScore", "employeeId") VALUES ('c6cff571-0a28-421b-bd81-cd58ca61928e', '2024-06-30T13:27:43.240Z', 566, '49b67bac-78ad-4096-962f-25c674adfee5');
INSERT INTO "performance_report" ("id", "reportDate", "performanceScore", "employeeId") VALUES ('6d3df4d3-3ff6-45eb-abf2-548fedda6c82', '2024-12-05T10:32:50.839Z', 737, 'c9035a37-becb-48f0-8d98-501abd97cb7b');
INSERT INTO "performance_report" ("id", "reportDate", "performanceScore", "employeeId") VALUES ('5eaeb122-4a56-4dad-8a98-940b4458ff15', '2023-08-17T05:43:06.090Z', 752, '64a45631-a49b-4ecc-8463-47dc4992113c');
INSERT INTO "performance_report" ("id", "reportDate", "performanceScore", "employeeId") VALUES ('c0ef51f3-670d-40fb-9e65-105330edad27', '2024-12-23T20:28:40.142Z', 600, '249f3e67-48dd-4452-886d-73ba40992412');

INSERT INTO "service_consumption" ("id", "serviceName", "cost", "reservationId") VALUES ('45f619d5-fe5b-4622-8b87-e3b79ad07598', 'Laundry Service', 700, 'ccdcd60b-6c5a-4b2b-a134-39e00c479179');
INSERT INTO "service_consumption" ("id", "serviceName", "cost", "reservationId") VALUES ('59a5df73-4e87-4e11-92d6-4f6f5c15d188', 'Laundry Service', 36, 'ccdcd60b-6c5a-4b2b-a134-39e00c479179');
INSERT INTO "service_consumption" ("id", "serviceName", "cost", "reservationId") VALUES ('879fdfef-12c5-4b16-9645-fa9ab2c38c9a', 'Gym Access', 939, '3c746b63-14fc-4869-9697-2438a9ed13d2');
INSERT INTO "service_consumption" ("id", "serviceName", "cost", "reservationId") VALUES ('095c1ca0-fe49-4c4d-b7c3-3666f5f97da8', 'Room Service', 955, '8a1e62aa-ade9-4c6a-bbda-20027abf5da5');
INSERT INTO "service_consumption" ("id", "serviceName", "cost", "reservationId") VALUES ('4b3f1b8d-593b-4b9b-9451-c5350b200169', 'Spa Treatment', 335, '8a1e62aa-ade9-4c6a-bbda-20027abf5da5');
INSERT INTO "service_consumption" ("id", "serviceName", "cost", "reservationId") VALUES ('f452d0c6-d56a-4537-8e37-b54a78835f64', 'Mini Bar', 303, '8a1e62aa-ade9-4c6a-bbda-20027abf5da5');
INSERT INTO "service_consumption" ("id", "serviceName", "cost", "reservationId") VALUES ('50084e86-d8d9-4bda-a4bc-d04eb7fb519f', 'Gym Access', 705, 'fa961aa8-f053-4832-bc50-4acae4949871');
INSERT INTO "service_consumption" ("id", "serviceName", "cost", "reservationId") VALUES ('464828a3-7c49-4d97-a61b-f211286bdf41', 'Mini Bar', 678, '81be8505-2e17-49f6-89cd-a4e9e71ac04f');
INSERT INTO "service_consumption" ("id", "serviceName", "cost", "reservationId") VALUES ('c380e916-9668-44d7-8fe7-1d1103ddb28b', 'Spa Treatment', 517, '8a1e62aa-ade9-4c6a-bbda-20027abf5da5');
INSERT INTO "service_consumption" ("id", "serviceName", "cost", "reservationId") VALUES ('dc46c923-2cc8-4303-8017-85f26a594043', 'Laundry Service', 821, 'd908d406-eb6e-428f-afa1-39379724ea79');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
