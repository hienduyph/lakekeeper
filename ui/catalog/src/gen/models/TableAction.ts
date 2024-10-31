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

export enum TableAction {
    Drop = 'drop',
    WriteData = 'write_data',
    ReadData = 'read_data',
    GetMetadata = 'get_metadata',
    Commit = 'commit',
    Rename = 'rename',
    ReadAssignments = 'read_assignments',
    GrantPassGrants = 'grant_pass_grants',
    GrantManageGrants = 'grant_manage_grants',
    GrantDescribe = 'grant_describe',
    GrantSelect = 'grant_select',
    GrantModify = 'grant_modify',
    ChangeOwnership = 'change_ownership'
}
