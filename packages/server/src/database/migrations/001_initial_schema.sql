CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    project_name TEXT NOT NULL,
    project_logo_1 BYTEA,
    project_logo_2 BYTEA,
    project_description TEXT,
    project_overview_description TEXT,
    project_overview_technologies TEXT,
    project_overview_duration TEXT,
    project_features TEXT,
    project_challenges TEXT,
    project_final_results TEXT
);