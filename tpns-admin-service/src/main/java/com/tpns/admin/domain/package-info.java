@TypeDef(name = "pg-uuid", defaultForType = UUID.class, typeClass = PostgresUUIDType.class)
package com.tpns.admin.domain;

import java.util.UUID;

import org.hibernate.annotations.TypeDef;
import org.hibernate.type.PostgresUUIDType;

