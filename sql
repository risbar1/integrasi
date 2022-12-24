-- ----------------------------
-- Table structure for t_monitoring
-- ----------------------------
DROP TABLE IF EXISTS "integrasi"."t_monitoring";
CREATE TABLE "integrasi"."t_monitoring" (
  "f_monitoring_id" int8 NOT NULL DEFAULT nextval(('integrasi.t_monitoring_f_monitoring_id'::text)::regclass),
  "f_nama_paket_pengadaan" text COLLATE "pg_catalog"."default",
  "f_mak" varchar(100) COLLATE "pg_catalog"."default",
  "f_nomor_spk" varchar(150) COLLATE "pg_catalog"."default",
  "f_nomor_kwitansi" varchar(150) COLLATE "pg_catalog"."default",
  "f_nilai_pengadaan" int8,
  "f_penyedia" varchar(150) COLLATE "pg_catalog"."default",
  "f_username_create" varchar(255) COLLATE "pg_catalog"."default",
  "f_tanggal_pengadaan" varchar(15) COLLATE "pg_catalog"."default",
  "f_sisa_anggaran" int8,
  "f_tahun" int8,
  "f_jenis" int4,
  "f_soft_delete" numeric(1,0),
  "f_tgl_create" timestamp(6) NOT NULL DEFAULT '1970-01-01 00:00:00'::timestamp without time zone,
  "f_last_update" timestamp(6) NOT NULL DEFAULT now(),
  "f_username" varchar(10) COLLATE "pg_catalog"."default",
  "f_user" int8,
  "f_barang_pengadaan" varchar(200) COLLATE "pg_catalog"."default",
  "f_volume" int8,
  "f_harga_satuan" int8,
  "f_harga_satuan_ppn" int8,
  "f_total_anggaran_terpakai" int8,
  "f_ppn" int4
)
;

-- ----------------------------
-- Table structure for t_monitoring_anggaran
-- ----------------------------
DROP TABLE IF EXISTS "integrasi"."t_monitoring_anggaran";
CREATE TABLE "integrasi"."t_monitoring_anggaran" (
  "f_monitoring_anggaran_id" int4 NOT NULL DEFAULT nextval(('integrasi.t_monitoring_f_monitoring_anggaran_id'::text)::regclass),
  "f_soft_delete" numeric(1,0),
  "f_tgl_create" timestamp(6) NOT NULL DEFAULT '1970-01-01 00:00:00'::timestamp without time zone,
  "f_last_update" timestamp(6) NOT NULL DEFAULT now(),
  "f_username" varchar(10) COLLATE "pg_catalog"."default",
  "f_total_anggaran" int8,
  "f_sisa_anggaran" int8,
  "f_tahun" int8,
  "f_total_anggaran_terpakai" int8,
  "f_jenis" int4
)
;

-- ----------------------------
-- Table structure for t_monitoring_jenis
-- ----------------------------
DROP TABLE IF EXISTS "integrasi"."t_monitoring_jenis";
CREATE TABLE "integrasi"."t_monitoring_jenis" (
  "f_monitoring_jenis_id" int4 NOT NULL DEFAULT nextval(('integrasi.t_monitoring_f_monitoring_jenis_id'::text)::regclass),
  "f_nama" varchar(255) COLLATE "pg_catalog"."default",
  "f_soft_delete" numeric(1,0),
  "f_tgl_create" timestamp(6) NOT NULL DEFAULT '1970-01-01 00:00:00'::timestamp without time zone,
  "f_last_update" timestamp(6) NOT NULL DEFAULT now(),
  "f_username" varchar(10) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for t_monitoring_log
-- ----------------------------
DROP TABLE IF EXISTS "integrasi"."t_monitoring_log";
CREATE TABLE "integrasi"."t_monitoring_log" (
  "f_monitoring_log_id" int4 NOT NULL DEFAULT nextval(('integrasi.t_monitoring_f_log_id'::text)::regclass),
  "f_data" text COLLATE "pg_catalog"."default",
  "f_tgl_create" timestamp(6) NOT NULL DEFAULT '1970-01-01 00:00:00'::timestamp without time zone,
  "f_username" varchar(10) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for t_monitoring_user
-- ----------------------------
DROP TABLE IF EXISTS "integrasi"."t_monitoring_user";
CREATE TABLE "integrasi"."t_monitoring_user" (
  "f_monitoring_user_id" int4 NOT NULL DEFAULT nextval(('integrasi.t_monitoring_f_user_id'::text)::regclass),
  "f_nama" varchar(255) COLLATE "pg_catalog"."default",
  "f_soft_delete" numeric(1,0),
  "f_tgl_create" timestamp(6) NOT NULL DEFAULT '1970-01-01 00:00:00'::timestamp without time zone,
  "f_last_update" timestamp(6) NOT NULL DEFAULT now(),
  "f_username" varchar(10) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for t_otoritas
-- ----------------------------
DROP TABLE IF EXISTS "integrasi"."t_otoritas";
CREATE TABLE "integrasi"."t_otoritas" (
  "f_otoritas" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "f_tgl_create" timestamp(6),
  "f_last_update" timestamp(6),
  "f_soft_delete" numeric(1,0),
  "f_username" varchar(20) COLLATE "pg_catalog"."default",
  "f_otoritas_id" int4 NOT NULL DEFAULT nextval(('integrasi.t_otoritas_f_otoritas_id_seq'::text)::regclass),
  "f_otoritas_website" varchar(20) COLLATE "pg_catalog"."default",
  "fn_otoritas_website" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for t_otoritas_website
-- ----------------------------
DROP TABLE IF EXISTS "integrasi"."t_otoritas_website";
CREATE TABLE "integrasi"."t_otoritas_website" (
  "f_kode" varchar(20) COLLATE "pg_catalog"."default" NOT NULL,
  "f_nama" varchar(255) COLLATE "pg_catalog"."default",
  "f_tgl_create" timestamp(6),
  "f_last_update" timestamp(6),
  "f_soft_delete" numeric(1,0),
  "f_username" varchar(20) COLLATE "pg_catalog"."default",
  "f_otoritas_website_id" int4 NOT NULL DEFAULT nextval(('integrasi.t_otoritas_website_f_otoritas_website_id_seq'::text)::regclass)
)
;

-- ----------------------------
-- Table structure for t_otoritasuser
-- ----------------------------
DROP TABLE IF EXISTS "integrasi"."t_otoritasuser";
CREATE TABLE "integrasi"."t_otoritasuser" (
  "f_otoritas_id" int4 NOT NULL,
  "f_password_id" int4 NOT NULL,
  "f_tgl_create" timestamp(6),
  "f_last_update" timestamp(6),
  "f_soft_delete" numeric(1,0),
  "f_username" varchar(20) COLLATE "pg_catalog"."default",
  "f_otoritas_website" varchar(20) COLLATE "pg_catalog"."default",
  "fn_otoritas_website" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Table structure for t_password
-- ----------------------------
DROP TABLE IF EXISTS "integrasi"."t_password";
CREATE TABLE "integrasi"."t_password" (
  "f_password_id" int4 NOT NULL DEFAULT nextval(('integrasi.t_password_f_password_id_seq'::text)::regclass),
  "f_username" varchar(25) COLLATE "pg_catalog"."default" NOT NULL,
  "f_password" text COLLATE "pg_catalog"."default",
  "f_nama" varchar(255) COLLATE "pg_catalog"."default",
  "f_startdate" timestamp(6),
  "f_lastlogin" timestamp(6),
  "f_soft_delete" int4,
  "f_tgl_create" timestamp(6),
  "f_last_update" timestamp(6),
  "f_username_update" varchar(20) COLLATE "pg_catalog"."default",
  "f_statusaktif" int2,
  "f_onlinestatus" int2,
  "f_user_id" int4
)
;

-- ----------------------------
-- Primary Key structure for table t_monitoring
-- ----------------------------
ALTER TABLE "integrasi"."t_monitoring" ADD CONSTRAINT "t_monitoring_pkey" PRIMARY KEY ("f_monitoring_id");

-- ----------------------------
-- Primary Key structure for table t_monitoring_anggaran
-- ----------------------------
ALTER TABLE "integrasi"."t_monitoring_anggaran" ADD CONSTRAINT "t_monitoring_jenis_copy1_pkey2" PRIMARY KEY ("f_monitoring_anggaran_id");

-- ----------------------------
-- Primary Key structure for table t_monitoring_jenis
-- ----------------------------
ALTER TABLE "integrasi"."t_monitoring_jenis" ADD CONSTRAINT "t_monitoring_copy1_pkey" PRIMARY KEY ("f_monitoring_jenis_id");

-- ----------------------------
-- Primary Key structure for table t_monitoring_log
-- ----------------------------
ALTER TABLE "integrasi"."t_monitoring_log" ADD CONSTRAINT "t_monitoring_jenis_copy1_pkey" PRIMARY KEY ("f_monitoring_log_id");

-- ----------------------------
-- Primary Key structure for table t_monitoring_user
-- ----------------------------
ALTER TABLE "integrasi"."t_monitoring_user" ADD CONSTRAINT "t_monitoring_jenis_copy1_pkey1" PRIMARY KEY ("f_monitoring_user_id");

-- ----------------------------
-- Uniques structure for table t_otoritas
-- ----------------------------
ALTER TABLE "integrasi"."t_otoritas" ADD CONSTRAINT "k_agama_copy1_f_kode_key4" UNIQUE ("f_otoritas");

-- ----------------------------
-- Primary Key structure for table t_otoritas
-- ----------------------------
ALTER TABLE "integrasi"."t_otoritas" ADD CONSTRAINT "k_agama_copy1_pkey26" PRIMARY KEY ("f_otoritas", "f_otoritas_id");

-- ----------------------------
-- Uniques structure for table t_otoritas_website
-- ----------------------------
ALTER TABLE "integrasi"."t_otoritas_website" ADD CONSTRAINT "k_agama_copy1_f_kode_key5" UNIQUE ("f_kode");

-- ----------------------------
-- Primary Key structure for table t_otoritas_website
-- ----------------------------
ALTER TABLE "integrasi"."t_otoritas_website" ADD CONSTRAINT "k_agama_copy1_pkey32" PRIMARY KEY ("f_kode", "f_otoritas_website_id");

-- ----------------------------
-- Primary Key structure for table t_password
-- ----------------------------
ALTER TABLE "integrasi"."t_password" ADD CONSTRAINT "t_username_pkey" PRIMARY KEY ("f_password_id", "f_username");

