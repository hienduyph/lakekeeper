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

export class ProjectAssignmentCreate {
    'role': string;
    'type': ProjectAssignmentCreateTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "role",
            "baseName": "role",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ProjectAssignmentCreateTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProjectAssignmentCreate.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ProjectAssignmentCreateTypeEnum {
    Create = 'create'
}

