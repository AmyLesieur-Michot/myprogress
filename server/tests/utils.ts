import database from "../src/database";

export async function initAndClearDatabase() {
    if (!database.isInitialized) {
        await database.initialize();
    }

    const entitiesNames = database.entityMetadatas.map(entity => '"' + entity.tableName + '"').join(", ");
    await database.query("TRUNCATE " + entitiesNames + " CASCADE;");
}