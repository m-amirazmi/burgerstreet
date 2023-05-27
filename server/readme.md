# Data Model

Stall

- images
- name
- description
- **opening_hours**
- location - address data model
- contact
- **created_by**
- **updated_by**
- is_verified
- **menu** - menu data model
- **amenities** - amentity data model

~~Address~~

- postcode
- street 1
- street 2
- city
- latitude
- longitude
- state
- country

Menu

- name
- images
- main_category
- sub_category
- description

---

---

- User
  - Can edit & edit
  - Has versioning to store all public edit version
  - Need admin to moderate stall creation and update
