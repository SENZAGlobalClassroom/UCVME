--drop table help;
--drop table job_post;
--drop table create_cv;
--drop table profile;

CREATE TABLE public.profile (
    profile_id SERIAL PRIMARY KEY,
    profile_username varchar(100) not null,
    profile_email varchar(100) not null,
    profile_password varchar(100) not null
);

create table public.create_cv(
	cv_id serial primary key,
	cv_firstname varchar(100) not null,
	cv_lastname varchar(100) not null,
	cv_phonenumber varchar(100) not null,
	cv_email varchar(100) not null,
	cv_country varchar(50) not null,
	cv_colour varchar(50) not null,
	cv_mbti varchar(10),
	cv_job_title varchar(100),
	cv_job_category varchar(100),
	cv_start_date date,
	cv_end_date date,
	cv_description_work varchar(200),
	cv_memory varchar(200),
	cv_reference_ph_number varchar(100),
	cv_video varchar(200),
	profile_id integer references profile(profile_id)
);


create table public.job_post(
	job_id serial primary key,
	job_post_title varchar(100),
	job_post_category varchar(100),
	job_post_date date,
	job_post_description varchar(200),
	job_post_image varchar(200),
	profile_id integer references profile(profile_id)
);

select * from profile;
select * from create_cv;
select * from job_post;

--create table liked_post(
--	
--);

--create table help(
--	help_name varchar(100),
--	help_email char(100),
--	help_message char(200)
--);
