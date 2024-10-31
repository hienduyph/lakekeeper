/**
 * iceberg-catalog
 * Implementation of the Iceberg REST Catalog server. 
 *
 * OpenAPI spec version: 0.4.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export enum WarehouseRelation {
    Ownership = 'ownership',
    PassGrants = 'pass_grants',
    ManageGrants = 'manage_grants',
    Describe = 'describe',
    Select = 'select',
    Create = 'create',
    Modify = 'modify'
}
