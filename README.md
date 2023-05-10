#API NESTJS

### generate migration files
npm run typeorm:generate-migration --name={name}

### generate migration files empty, user can be customized code
npm run typeorm:create-migration --name={name}

### run script sql have been generated from cli "npm run typeorm:generate-migration --name={name}"
npm run typeorm:run-migration

### revert script sql have been generated from cli "npm run typeorm:generate-migration --name={name}"
npm run typeorm:revert-migration

### Relation options

#### ===== eager =====
if true: Eager relations only work when you use find* methods. If you use QueryBuilder eager relations are disabled and have to use leftJoinAndSelect to load the relation. Eager relations can only be used on one side of the relationship, using eager: true on both sides of relationship is disallowed.

By default: Fetch type: 
OneToMany, ManyToMany: LAZY
ManyToOne, OneToOne: EAGER

#### ===== cascade =====
cascade: ["insert"]: the related object will be inserted in the database.
cascade: ["update"]: the related object will be updated in the database.
cascade: ["insert", "update"] | true: the related object will be inserted and updated in the database.

#### ===== onDelete =====
onDelete: "RESTRICT": employee can't deleted when employee still reference from contactInfo
onDelete: "CASCADE": contactInfo will be deleted when employee is deleted
onDelete: "SET NULL": contactInfo set null when employee is deleted

#### ===== Repository API =====
use create() for creating a new instance and don't save data in the database
use save() for creating a new record or updating the whole entity at once, only works when you provide primary id
use insert() for insert a new entity, or array of entities.
use update() for updating an entity partially.
use upsert() for creating a new record or updating the whole entity at once, can works with multiple field
use remove() for removes a given entity or array of entities. 
use delete() for deletes entities by entity id, ids or given conditions:
use softDelete() for soft deleted rows by entity id, ids or given conditions:
use restore() for recover the soft deleted rows by entity id, ids or given conditions:
use softRemove() for soft deleted rows a given entity or array of entities. 
use recover() for recover the soft deleted rows a given entity or array of entities. 
find*: for find entities with multiple find options
find*By for find entities with only find where conditions, cannot commbine order, relations, select ...

