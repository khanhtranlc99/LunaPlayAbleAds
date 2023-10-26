var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.JointSpring' )
  var i1165 = data
  i1164.spring = i1165[0]
  i1164.damper = i1165[1]
  i1164.targetPosition = i1165[2]
  return i1164
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.JointMotor' )
  var i1167 = data
  i1166.m_TargetVelocity = i1167[0]
  i1166.m_Force = i1167[1]
  i1166.m_FreeSpin = i1167[2]
  return i1166
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.JointLimits' )
  var i1169 = data
  i1168.m_Min = i1169[0]
  i1168.m_Max = i1169[1]
  i1168.m_Bounciness = i1169[2]
  i1168.m_BounceMinVelocity = i1169[3]
  i1168.m_ContactDistance = i1169[4]
  i1168.minBounce = i1169[5]
  i1168.maxBounce = i1169[6]
  return i1168
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.JointDrive' )
  var i1171 = data
  i1170.m_PositionSpring = i1171[0]
  i1170.m_PositionDamper = i1171[1]
  i1170.m_MaximumForce = i1171[2]
  return i1170
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1172 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1173 = data
  i1172.m_Spring = i1173[0]
  i1172.m_Damper = i1173[1]
  return i1172
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1175 = data
  i1174.m_Limit = i1175[0]
  i1174.m_Bounciness = i1175[1]
  i1174.m_ContactDistance = i1175[2]
  return i1174
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1177 = data
  i1176.m_ExtremumSlip = i1177[0]
  i1176.m_ExtremumValue = i1177[1]
  i1176.m_AsymptoteSlip = i1177[2]
  i1176.m_AsymptoteValue = i1177[3]
  i1176.m_Stiffness = i1177[4]
  return i1176
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1179 = data
  i1178.m_LowerAngle = i1179[0]
  i1178.m_UpperAngle = i1179[1]
  return i1178
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1181 = data
  i1180.m_MotorSpeed = i1181[0]
  i1180.m_MaximumMotorTorque = i1181[1]
  return i1180
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1182 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1183 = data
  i1182.m_DampingRatio = i1183[0]
  i1182.m_Frequency = i1183[1]
  i1182.m_Angle = i1183[2]
  return i1182
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1184 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1185 = data
  i1184.m_LowerTranslation = i1185[0]
  i1184.m_UpperTranslation = i1185[1]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1186 = root || new pc.UnityMaterial()
  var i1187 = data
  i1186.name = i1187[0]
  request.r(i1187[1], i1187[2], 0, i1186, 'shader')
  i1186.renderQueue = i1187[3]
  i1186.enableInstancing = !!i1187[4]
  var i1189 = i1187[5]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1189[i + 0]) );
  }
  i1186.floatParameters = i1188
  var i1191 = i1187[6]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1191[i + 0]) );
  }
  i1186.colorParameters = i1190
  var i1193 = i1187[7]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1193[i + 0]) );
  }
  i1186.vectorParameters = i1192
  var i1195 = i1187[8]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1195[i + 0]) );
  }
  i1186.textureParameters = i1194
  var i1197 = i1187[9]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1197[i + 0]) );
  }
  i1186.materialFlags = i1196
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1201 = data
  i1200.name = i1201[0]
  i1200.value = i1201[1]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1205 = data
  i1204.name = i1205[0]
  i1204.value = new pc.Color(i1205[1], i1205[2], i1205[3], i1205[4])
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1209 = data
  i1208.name = i1209[0]
  i1208.value = new pc.Vec4( i1209[1], i1209[2], i1209[3], i1209[4] )
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1213 = data
  i1212.name = i1213[0]
  request.r(i1213[1], i1213[2], 0, i1212, 'value')
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1217 = data
  i1216.name = i1217[0]
  i1216.enabled = !!i1217[1]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1219 = data
  i1218.name = i1219[0]
  i1218.width = i1219[1]
  i1218.height = i1219[2]
  i1218.mipmapCount = i1219[3]
  i1218.anisoLevel = i1219[4]
  i1218.filterMode = i1219[5]
  i1218.hdr = !!i1219[6]
  i1218.format = i1219[7]
  i1218.wrapMode = i1219[8]
  i1218.alphaIsTransparency = !!i1219[9]
  i1218.alphaSource = i1219[10]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1221 = data
  i1220.name = i1221[0]
  i1220.halfPrecision = !!i1221[1]
  i1220.vertexCount = i1221[2]
  i1220.aabb = i1221[3]
  var i1223 = i1221[4]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( !!i1223[i + 0] );
  }
  i1220.streams = i1222
  i1220.vertices = i1221[5]
  var i1225 = i1221[6]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1225[i + 0]) );
  }
  i1220.subMeshes = i1224
  var i1227 = i1221[7]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 16) {
    i1226.push( new pc.Mat4().setData(i1227[i + 0], i1227[i + 1], i1227[i + 2], i1227[i + 3],  i1227[i + 4], i1227[i + 5], i1227[i + 6], i1227[i + 7],  i1227[i + 8], i1227[i + 9], i1227[i + 10], i1227[i + 11],  i1227[i + 12], i1227[i + 13], i1227[i + 14], i1227[i + 15]) );
  }
  i1220.bindposes = i1226
  var i1229 = i1221[8]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1229[i + 0]) );
  }
  i1220.blendShapes = i1228
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1235 = data
  i1234.triangles = i1235[0]
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1241 = data
  i1240.name = i1241[0]
  var i1243 = i1241[1]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1243[i + 0]) );
  }
  i1240.frames = i1242
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1245 = data
  i1244.name = i1245[0]
  i1244.atlasId = i1245[1]
  i1244.mipmapCount = i1245[2]
  i1244.hdr = !!i1245[3]
  i1244.size = i1245[4]
  i1244.anisoLevel = i1245[5]
  i1244.filterMode = i1245[6]
  i1244.wrapMode = i1245[7]
  var i1247 = i1245[8]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 4) {
    i1246.push( UnityEngine.Rect.MinMaxRect(i1247[i + 0], i1247[i + 1], i1247[i + 2], i1247[i + 3]) );
  }
  i1244.rects = i1246
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1251 = data
  i1250.name = i1251[0]
  i1250.index = i1251[1]
  i1250.startup = !!i1251[2]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1253 = data
  i1252.position = new pc.Vec3( i1253[0], i1253[1], i1253[2] )
  i1252.scale = new pc.Vec3( i1253[3], i1253[4], i1253[5] )
  i1252.rotation = new pc.Quat(i1253[6], i1253[7], i1253[8], i1253[9])
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1255 = data
  i1254.enabled = !!i1255[0]
  i1254.aspect = i1255[1]
  i1254.orthographic = !!i1255[2]
  i1254.orthographicSize = i1255[3]
  i1254.backgroundColor = new pc.Color(i1255[4], i1255[5], i1255[6], i1255[7])
  i1254.nearClipPlane = i1255[8]
  i1254.farClipPlane = i1255[9]
  i1254.fieldOfView = i1255[10]
  i1254.depth = i1255[11]
  i1254.clearFlags = i1255[12]
  i1254.cullingMask = i1255[13]
  i1254.rect = i1255[14]
  request.r(i1255[15], i1255[16], 0, i1254, 'targetTexture')
  i1254.usePhysicalProperties = !!i1255[17]
  i1254.focalLength = i1255[18]
  i1254.sensorSize = new pc.Vec2( i1255[19], i1255[20] )
  i1254.lensShift = new pc.Vec2( i1255[21], i1255[22] )
  i1254.gateFit = i1255[23]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1257 = data
  i1256.name = i1257[0]
  i1256.tagId = i1257[1]
  i1256.enabled = !!i1257[2]
  i1256.isStatic = !!i1257[3]
  i1256.layer = i1257[4]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1259 = data
  i1258.enabled = !!i1259[0]
  i1258.type = i1259[1]
  i1258.color = new pc.Color(i1259[2], i1259[3], i1259[4], i1259[5])
  i1258.cullingMask = i1259[6]
  i1258.intensity = i1259[7]
  i1258.range = i1259[8]
  i1258.spotAngle = i1259[9]
  i1258.shadows = i1259[10]
  i1258.shadowNormalBias = i1259[11]
  i1258.shadowBias = i1259[12]
  i1258.shadowStrength = i1259[13]
  i1258.shadowResolution = i1259[14]
  i1258.lightmapBakeType = i1259[15]
  i1258.renderMode = i1259[16]
  request.r(i1259[17], i1259[18], 0, i1258, 'cookie')
  i1258.cookieSize = i1259[19]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1261 = data
  i1260.pivot = new pc.Vec2( i1261[0], i1261[1] )
  i1260.anchorMin = new pc.Vec2( i1261[2], i1261[3] )
  i1260.anchorMax = new pc.Vec2( i1261[4], i1261[5] )
  i1260.sizeDelta = new pc.Vec2( i1261[6], i1261[7] )
  i1260.anchoredPosition3D = new pc.Vec3( i1261[8], i1261[9], i1261[10] )
  i1260.rotation = new pc.Quat(i1261[11], i1261[12], i1261[13], i1261[14])
  i1260.scale = new pc.Vec3( i1261[15], i1261[16], i1261[17] )
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1263 = data
  i1262.enabled = !!i1263[0]
  i1262.planeDistance = i1263[1]
  i1262.referencePixelsPerUnit = i1263[2]
  i1262.isFallbackOverlay = !!i1263[3]
  i1262.renderMode = i1263[4]
  i1262.renderOrder = i1263[5]
  i1262.sortingLayerName = i1263[6]
  i1262.sortingOrder = i1263[7]
  i1262.scaleFactor = i1263[8]
  request.r(i1263[9], i1263[10], 0, i1262, 'worldCamera')
  i1262.overrideSorting = !!i1263[11]
  i1262.pixelPerfect = !!i1263[12]
  i1262.targetDisplay = i1263[13]
  i1262.overridePixelPerfect = !!i1263[14]
  return i1262
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1264 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1265 = data
  i1264.m_UiScaleMode = i1265[0]
  i1264.m_ReferencePixelsPerUnit = i1265[1]
  i1264.m_ScaleFactor = i1265[2]
  i1264.m_ReferenceResolution = new pc.Vec2( i1265[3], i1265[4] )
  i1264.m_ScreenMatchMode = i1265[5]
  i1264.m_MatchWidthOrHeight = i1265[6]
  i1264.m_PhysicalUnit = i1265[7]
  i1264.m_FallbackScreenDPI = i1265[8]
  i1264.m_DefaultSpriteDPI = i1265[9]
  i1264.m_DynamicPixelsPerUnit = i1265[10]
  i1264.m_PresetInfoIsWorld = !!i1265[11]
  return i1264
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1266 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1267 = data
  i1266.m_IgnoreReversedGraphics = !!i1267[0]
  i1266.m_BlockingObjects = i1267[1]
  i1266.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1267[2] )
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1269 = data
  i1268.cullTransparentMesh = !!i1269[0]
  return i1268
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1270 = root || request.c( 'UnityEngine.UI.Image' )
  var i1271 = data
  request.r(i1271[0], i1271[1], 0, i1270, 'm_Sprite')
  i1270.m_Type = i1271[2]
  i1270.m_PreserveAspect = !!i1271[3]
  i1270.m_FillCenter = !!i1271[4]
  i1270.m_FillMethod = i1271[5]
  i1270.m_FillAmount = i1271[6]
  i1270.m_FillClockwise = !!i1271[7]
  i1270.m_FillOrigin = i1271[8]
  i1270.m_UseSpriteMesh = !!i1271[9]
  i1270.m_PixelsPerUnitMultiplier = i1271[10]
  request.r(i1271[11], i1271[12], 0, i1270, 'm_Material')
  i1270.m_Maskable = !!i1271[13]
  i1270.m_Color = new pc.Color(i1271[14], i1271[15], i1271[16], i1271[17])
  i1270.m_RaycastTarget = !!i1271[18]
  i1270.m_RaycastPadding = new pc.Vec4( i1271[19], i1271[20], i1271[21], i1271[22] )
  return i1270
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.UI.Text' )
  var i1273 = data
  i1272.m_FontData = request.d('UnityEngine.UI.FontData', i1273[0], i1272.m_FontData)
  i1272.m_Text = i1273[1]
  request.r(i1273[2], i1273[3], 0, i1272, 'm_Material')
  i1272.m_Maskable = !!i1273[4]
  i1272.m_Color = new pc.Color(i1273[5], i1273[6], i1273[7], i1273[8])
  i1272.m_RaycastTarget = !!i1273[9]
  i1272.m_RaycastPadding = new pc.Vec4( i1273[10], i1273[11], i1273[12], i1273[13] )
  return i1272
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1274 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1275 = data
  request.r(i1275[0], i1275[1], 0, i1274, 'm_Font')
  i1274.m_FontSize = i1275[2]
  i1274.m_FontStyle = i1275[3]
  i1274.m_BestFit = !!i1275[4]
  i1274.m_MinSize = i1275[5]
  i1274.m_MaxSize = i1275[6]
  i1274.m_Alignment = i1275[7]
  i1274.m_AlignByGeometry = !!i1275[8]
  i1274.m_RichText = !!i1275[9]
  i1274.m_HorizontalOverflow = i1275[10]
  i1274.m_VerticalOverflow = i1275[11]
  i1274.m_LineSpacing = i1275[12]
  return i1274
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1276 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1277 = data
  request.r(i1277[0], i1277[1], 0, i1276, 'm_FirstSelected')
  i1276.m_sendNavigationEvents = !!i1277[2]
  i1276.m_DragThreshold = i1277[3]
  return i1276
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1279 = data
  i1278.m_HorizontalAxis = i1279[0]
  i1278.m_VerticalAxis = i1279[1]
  i1278.m_SubmitButton = i1279[2]
  i1278.m_CancelButton = i1279[3]
  i1278.m_InputActionsPerSecond = i1279[4]
  i1278.m_RepeatDelay = i1279[5]
  i1278.m_ForceModuleActive = !!i1279[6]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1281 = data
  request.r(i1281[0], i1281[1], 0, i1280, 'animatorController')
  request.r(i1281[2], i1281[3], 0, i1280, 'avatar')
  i1280.updateMode = i1281[4]
  i1280.hasTransformHierarchy = !!i1281[5]
  var i1283 = i1281[6]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 2) {
  request.r(i1283[i + 0], i1283[i + 1], 2, i1282, '')
  }
  i1280.humanBones = i1282
  i1280.enabled = !!i1281[7]
  return i1280
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i1286 = root || request.c( 'PlayerController' )
  var i1287 = data
  request.r(i1287[0], i1287[1], 0, i1286, 'animator')
  request.r(i1287[2], i1287[3], 0, i1286, 'targetPosition')
  request.r(i1287[4], i1287[5], 0, i1286, 'fisrtPossition')
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1289 = data
  i1288.enabled = !!i1289[0]
  request.r(i1289[1], i1289[2], 0, i1288, 'sharedMaterial')
  var i1291 = i1289[3]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 2) {
  request.r(i1291[i + 0], i1291[i + 1], 2, i1290, '')
  }
  i1288.sharedMaterials = i1290
  i1288.receiveShadows = !!i1289[4]
  i1288.shadowCastingMode = i1289[5]
  i1288.sortingLayerID = i1289[6]
  i1288.sortingOrder = i1289[7]
  i1288.lightmapIndex = i1289[8]
  i1288.lightmapSceneIndex = i1289[9]
  i1288.lightmapScaleOffset = new pc.Vec4( i1289[10], i1289[11], i1289[12], i1289[13] )
  i1288.lightProbeUsage = i1289[14]
  i1288.reflectionProbeUsage = i1289[15]
  request.r(i1289[16], i1289[17], 0, i1288, 'sharedMesh')
  var i1293 = i1289[18]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 2) {
  request.r(i1293[i + 0], i1293[i + 1], 2, i1292, '')
  }
  i1288.bones = i1292
  i1288.updateWhenOffscreen = !!i1289[19]
  i1288.localBounds = i1289[20]
  request.r(i1289[21], i1289[22], 0, i1288, 'rootBone')
  var i1295 = i1289[23]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1295[i + 0]) );
  }
  i1288.blendShapesWeights = i1294
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1301 = data
  i1300.weight = i1301[0]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1303 = data
  request.r(i1303[0], i1303[1], 0, i1302, 'sharedMesh')
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1305 = data
  request.r(i1305[0], i1305[1], 0, i1304, 'additionalVertexStreams')
  i1304.enabled = !!i1305[2]
  request.r(i1305[3], i1305[4], 0, i1304, 'sharedMaterial')
  var i1307 = i1305[5]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 2) {
  request.r(i1307[i + 0], i1307[i + 1], 2, i1306, '')
  }
  i1304.sharedMaterials = i1306
  i1304.receiveShadows = !!i1305[6]
  i1304.shadowCastingMode = i1305[7]
  i1304.sortingLayerID = i1305[8]
  i1304.sortingOrder = i1305[9]
  i1304.lightmapIndex = i1305[10]
  i1304.lightmapSceneIndex = i1305[11]
  i1304.lightmapScaleOffset = new pc.Vec4( i1305[12], i1305[13], i1305[14], i1305[15] )
  i1304.lightProbeUsage = i1305[16]
  i1304.reflectionProbeUsage = i1305[17]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1309 = data
  i1308.enabled = !!i1309[0]
  request.r(i1309[1], i1309[2], 0, i1308, 'sharedMaterial')
  var i1311 = i1309[3]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 2) {
  request.r(i1311[i + 0], i1311[i + 1], 2, i1310, '')
  }
  i1308.sharedMaterials = i1310
  i1308.receiveShadows = !!i1309[4]
  i1308.shadowCastingMode = i1309[5]
  i1308.sortingLayerID = i1309[6]
  i1308.sortingOrder = i1309[7]
  i1308.lightmapIndex = i1309[8]
  i1308.lightmapSceneIndex = i1309[9]
  i1308.lightmapScaleOffset = new pc.Vec4( i1309[10], i1309[11], i1309[12], i1309[13] )
  i1308.lightProbeUsage = i1309[14]
  i1308.reflectionProbeUsage = i1309[15]
  i1308.color = new pc.Color(i1309[16], i1309[17], i1309[18], i1309[19])
  request.r(i1309[20], i1309[21], 0, i1308, 'sprite')
  i1308.flipX = !!i1309[22]
  i1308.flipY = !!i1309[23]
  i1308.drawMode = i1309[24]
  i1308.size = new pc.Vec2( i1309[25], i1309[26] )
  i1308.tileMode = i1309[27]
  i1308.adaptiveModeThreshold = i1309[28]
  i1308.maskInteraction = i1309[29]
  i1308.spriteSortPoint = i1309[30]
  return i1308
}

Deserializers["GachaController"] = function (request, data, root) {
  var i1312 = root || request.c( 'GachaController' )
  var i1313 = data
  request.r(i1313[0], i1313[1], 0, i1312, 'transformLeft')
  request.r(i1313[2], i1313[3], 0, i1312, 'transformRight')
  request.r(i1313[4], i1313[5], 0, i1312, 'arrow')
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1315 = data
  i1314.ambientIntensity = i1315[0]
  i1314.reflectionIntensity = i1315[1]
  i1314.ambientMode = i1315[2]
  i1314.ambientLight = new pc.Color(i1315[3], i1315[4], i1315[5], i1315[6])
  i1314.ambientSkyColor = new pc.Color(i1315[7], i1315[8], i1315[9], i1315[10])
  i1314.ambientGroundColor = new pc.Color(i1315[11], i1315[12], i1315[13], i1315[14])
  i1314.ambientEquatorColor = new pc.Color(i1315[15], i1315[16], i1315[17], i1315[18])
  i1314.fogColor = new pc.Color(i1315[19], i1315[20], i1315[21], i1315[22])
  i1314.fogEndDistance = i1315[23]
  i1314.fogStartDistance = i1315[24]
  i1314.fogDensity = i1315[25]
  i1314.fog = !!i1315[26]
  request.r(i1315[27], i1315[28], 0, i1314, 'skybox')
  i1314.fogMode = i1315[29]
  var i1317 = i1315[30]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1317[i + 0]) );
  }
  i1314.lightmaps = i1316
  i1314.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1315[31], i1314.lightProbes)
  i1314.lightmapsMode = i1315[32]
  i1314.mixedBakeMode = i1315[33]
  i1314.environmentLightingMode = i1315[34]
  i1314.ambientProbe = new pc.SphericalHarmonicsL2(i1315[35])
  i1314.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1315[36])
  i1314.useReferenceAmbientProbe = !!i1315[37]
  request.r(i1315[38], i1315[39], 0, i1314, 'customReflection')
  request.r(i1315[40], i1315[41], 0, i1314, 'defaultReflection')
  i1314.defaultReflectionMode = i1315[42]
  i1314.defaultReflectionResolution = i1315[43]
  i1314.sunLightObjectId = i1315[44]
  i1314.pixelLightCount = i1315[45]
  i1314.defaultReflectionHDR = !!i1315[46]
  i1314.hasLightDataAsset = !!i1315[47]
  i1314.hasManualGenerate = !!i1315[48]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1321 = data
  request.r(i1321[0], i1321[1], 0, i1320, 'lightmapColor')
  request.r(i1321[2], i1321[3], 0, i1320, 'lightmapDirection')
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1322 = root || new UnityEngine.LightProbes()
  var i1323 = data
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1331 = data
  var i1333 = i1331[0]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1333[i + 0]));
  }
  i1330.ShaderCompilationErrors = i1332
  i1330.name = i1331[1]
  i1330.guid = i1331[2]
  var i1335 = i1331[3]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( i1335[i + 0] );
  }
  i1330.shaderDefinedKeywords = i1334
  var i1337 = i1331[4]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1337[i + 0]) );
  }
  i1330.passes = i1336
  var i1339 = i1331[5]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1339[i + 0]) );
  }
  i1330.usePasses = i1338
  var i1341 = i1331[6]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1341[i + 0]) );
  }
  i1330.defaultParameterValues = i1340
  request.r(i1331[7], i1331[8], 0, i1330, 'unityFallbackShader')
  i1330.readDepth = !!i1331[9]
  i1330.isCreatedByShaderGraph = !!i1331[10]
  i1330.usedBatchUniforms = i1331[11]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1345 = data
  i1344.shaderName = i1345[0]
  i1344.errorMessage = i1345[1]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1350 = root || new pc.UnityShaderPass()
  var i1351 = data
  i1350.id = i1351[0]
  i1350.subShaderIndex = i1351[1]
  i1350.name = i1351[2]
  i1350.passType = i1351[3]
  i1350.grabPassTextureName = i1351[4]
  i1350.usePass = !!i1351[5]
  i1350.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1351[6], i1350.zTest)
  i1350.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1351[7], i1350.zWrite)
  i1350.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1351[8], i1350.culling)
  i1350.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1351[9], i1350.blending)
  i1350.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1351[10], i1350.alphaBlending)
  i1350.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1351[11], i1350.colorWriteMask)
  i1350.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1351[12], i1350.offsetUnits)
  i1350.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1351[13], i1350.offsetFactor)
  i1350.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1351[14], i1350.stencilRef)
  i1350.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1351[15], i1350.stencilReadMask)
  i1350.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1351[16], i1350.stencilWriteMask)
  i1350.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1351[17], i1350.stencilOp)
  i1350.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1351[18], i1350.stencilOpFront)
  i1350.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1351[19], i1350.stencilOpBack)
  var i1353 = i1351[20]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1353[i + 0]) );
  }
  i1350.tags = i1352
  var i1355 = i1351[21]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( i1355[i + 0] );
  }
  i1350.passDefinedKeywords = i1354
  var i1357 = i1351[22]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1357[i + 0]) );
  }
  i1350.passDefinedKeywordGroups = i1356
  var i1359 = i1351[23]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1359[i + 0]) );
  }
  i1350.variants = i1358
  var i1361 = i1351[24]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1361[i + 0]) );
  }
  i1350.excludedVariants = i1360
  i1350.hasDepthReader = !!i1351[25]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1363 = data
  i1362.val = i1363[0]
  i1362.name = i1363[1]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1365 = data
  i1364.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1365[0], i1364.src)
  i1364.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1365[1], i1364.dst)
  i1364.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1365[2], i1364.op)
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1367 = data
  i1366.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1367[0], i1366.pass)
  i1366.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1367[1], i1366.fail)
  i1366.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1367[2], i1366.zFail)
  i1366.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1367[3], i1366.comp)
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1371 = data
  i1370.name = i1371[0]
  i1370.value = i1371[1]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1375 = data
  var i1377 = i1375[0]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( i1377[i + 0] );
  }
  i1374.keywords = i1376
  i1374.hasDiscard = !!i1375[1]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1381 = data
  i1380.passId = i1381[0]
  i1380.subShaderIndex = i1381[1]
  var i1383 = i1381[2]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( i1383[i + 0] );
  }
  i1380.keywords = i1382
  i1380.vertexProgram = i1381[3]
  i1380.fragmentProgram = i1381[4]
  i1380.readDepth = !!i1381[5]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1387 = data
  request.r(i1387[0], i1387[1], 0, i1386, 'shader')
  i1386.pass = i1387[2]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1391 = data
  i1390.name = i1391[0]
  i1390.type = i1391[1]
  i1390.value = new pc.Vec4( i1391[2], i1391[3], i1391[4], i1391[5] )
  i1390.textureValue = i1391[6]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1393 = data
  i1392.name = i1393[0]
  request.r(i1393[1], i1393[2], 0, i1392, 'texture')
  i1392.aabb = i1393[3]
  i1392.vertices = i1393[4]
  i1392.triangles = i1393[5]
  i1392.textureRect = UnityEngine.Rect.MinMaxRect(i1393[6], i1393[7], i1393[8], i1393[9])
  i1392.packedRect = UnityEngine.Rect.MinMaxRect(i1393[10], i1393[11], i1393[12], i1393[13])
  i1392.border = new pc.Vec4( i1393[14], i1393[15], i1393[16], i1393[17] )
  i1392.transparency = i1393[18]
  i1392.bounds = i1393[19]
  i1392.pixelsPerUnit = i1393[20]
  i1392.textureWidth = i1393[21]
  i1392.textureHeight = i1393[22]
  i1392.nativeSize = new pc.Vec2( i1393[23], i1393[24] )
  i1392.pivot = new pc.Vec2( i1393[25], i1393[26] )
  i1392.textureRectOffset = new pc.Vec2( i1393[27], i1393[28] )
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1395 = data
  i1394.name = i1395[0]
  i1394.wrapMode = i1395[1]
  i1394.isLooping = !!i1395[2]
  i1394.length = i1395[3]
  var i1397 = i1395[4]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1397[i + 0]) );
  }
  i1394.curves = i1396
  var i1399 = i1395[5]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1399[i + 0]) );
  }
  i1394.events = i1398
  i1394.halfPrecision = !!i1395[6]
  i1394.frameRate = i1395[7]
  i1394.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1395[8], i1394.localBounds)
  i1394.hasMuscleCurves = !!i1395[9]
  var i1401 = i1395[10]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( i1401[i + 0] );
  }
  i1394.clipMuscleConstant = i1400
  i1394.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1395[11], i1394.clipBindingConstant)
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1405 = data
  i1404.path = i1405[0]
  i1404.componentType = i1405[1]
  i1404.property = i1405[2]
  i1404.keys = i1405[3]
  var i1407 = i1405[4]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1407[i + 0]) );
  }
  i1404.objectReferenceKeys = i1406
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1411 = data
  i1410.time = i1411[0]
  request.r(i1411[1], i1411[2], 0, i1410, 'value')
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1415 = data
  i1414.functionName = i1415[0]
  i1414.floatParameter = i1415[1]
  i1414.intParameter = i1415[2]
  i1414.stringParameter = i1415[3]
  request.r(i1415[4], i1415[5], 0, i1414, 'objectReferenceParameter')
  i1414.time = i1415[6]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1417 = data
  i1416.center = new pc.Vec3( i1417[0], i1417[1], i1417[2] )
  i1416.extends = new pc.Vec3( i1417[3], i1417[4], i1417[5] )
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1421 = data
  var i1423 = i1421[0]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( i1423[i + 0] );
  }
  i1420.genericBindings = i1422
  var i1425 = i1421[1]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( i1425[i + 0] );
  }
  i1420.pptrCurveMapping = i1424
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1427 = data
  i1426.name = i1427[0]
  i1426.ascent = i1427[1]
  i1426.originalLineHeight = i1427[2]
  i1426.fontSize = i1427[3]
  var i1429 = i1427[4]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1429[i + 0]) );
  }
  i1426.characterInfo = i1428
  request.r(i1427[5], i1427[6], 0, i1426, 'texture')
  i1426.originalFontSize = i1427[7]
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1433 = data
  i1432.index = i1433[0]
  i1432.advance = i1433[1]
  i1432.bearing = i1433[2]
  i1432.glyphWidth = i1433[3]
  i1432.glyphHeight = i1433[4]
  i1432.minX = i1433[5]
  i1432.maxX = i1433[6]
  i1432.minY = i1433[7]
  i1432.maxY = i1433[8]
  i1432.uvBottomLeftX = i1433[9]
  i1432.uvBottomLeftY = i1433[10]
  i1432.uvBottomRightX = i1433[11]
  i1432.uvBottomRightY = i1433[12]
  i1432.uvTopLeftX = i1433[13]
  i1432.uvTopLeftY = i1433[14]
  i1432.uvTopRightX = i1433[15]
  i1432.uvTopRightY = i1433[16]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1435 = data
  i1434.name = i1435[0]
  var i1437 = i1435[1]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1437[i + 0]) );
  }
  i1434.states = i1436
  var i1439 = i1435[2]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1439[i + 0]) );
  }
  i1434.layers = i1438
  var i1441 = i1435[3]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1441[i + 0]) );
  }
  i1434.parameters = i1440
  i1434.animationClips = i1435[4]
  i1434.HasSubStateMachines = !!i1435[5]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1445 = data
  i1444.cycleOffset = i1445[0]
  i1444.cycleOffsetParameter = i1445[1]
  i1444.cycleOffsetParameterActive = !!i1445[2]
  i1444.mirror = !!i1445[3]
  i1444.mirrorParameter = i1445[4]
  i1444.mirrorParameterActive = !!i1445[5]
  i1444.motionId = i1445[6]
  i1444.nameHash = i1445[7]
  i1444.fullPathHash = i1445[8]
  i1444.speed = i1445[9]
  i1444.speedParameter = i1445[10]
  i1444.speedParameterActive = !!i1445[11]
  i1444.tag = i1445[12]
  i1444.name = i1445[13]
  i1444.layer = i1445[14]
  i1444.writeDefaultValues = !!i1445[15]
  var i1447 = i1445[16]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1447[i + 0]) );
  }
  i1444.transitions = i1446
  var i1449 = i1445[17]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 2) {
  request.r(i1449[i + 0], i1449[i + 1], 2, i1448, '')
  }
  i1444.behaviours = i1448
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1453 = data
  i1452.fullPath = i1453[0]
  i1452.canTransitionToSelf = !!i1453[1]
  i1452.duration = i1453[2]
  i1452.exitTime = i1453[3]
  i1452.hasExitTime = !!i1453[4]
  i1452.hasFixedDuration = !!i1453[5]
  i1452.interruptionSource = i1453[6]
  i1452.offset = i1453[7]
  i1452.orderedInterruption = !!i1453[8]
  i1452.destinationStateNameHash = i1453[9]
  i1452.destinationStateMachineId = i1453[10]
  i1452.isExit = !!i1453[11]
  i1452.mute = !!i1453[12]
  i1452.solo = !!i1453[13]
  var i1455 = i1453[14]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1455[i + 0]) );
  }
  i1452.conditions = i1454
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1461 = data
  i1460.mode = i1461[0]
  i1460.parameter = i1461[1]
  i1460.threshold = i1461[2]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1465 = data
  i1464.blendingMode = i1465[0]
  i1464.defaultWeight = i1465[1]
  i1464.name = i1465[2]
  i1464.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1465[3], i1464.stateMachine)
  return i1464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1467 = data
  i1466.id = i1467[0]
  i1466.defaultStateNameHash = i1467[1]
  var i1469 = i1467[2]
  var i1468 = []
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1469[i + 0]) );
  }
  i1466.entryTransitions = i1468
  var i1471 = i1467[3]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1471[i + 0]) );
  }
  i1466.anyStateTransitions = i1470
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1475 = data
  i1474.destinationStateNameHash = i1475[0]
  i1474.destinationStateMachineId = i1475[1]
  i1474.isExit = !!i1475[2]
  i1474.mute = !!i1475[3]
  i1474.solo = !!i1475[4]
  var i1477 = i1475[5]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1477[i + 0]) );
  }
  i1474.conditions = i1476
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1481 = data
  i1480.defaultBool = !!i1481[0]
  i1480.defaultFloat = i1481[1]
  i1480.defaultInt = i1481[2]
  i1480.name = i1481[3]
  i1480.nameHash = i1481[4]
  i1480.type = i1481[5]
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1483 = data
  var i1485 = i1483[0]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1485[i + 0]) );
  }
  i1482.files = i1484
  i1482.componentToPrefabIds = i1483[1]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1489 = data
  i1488.path = i1489[0]
  request.r(i1489[1], i1489[2], 0, i1488, 'unityObject')
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1491 = data
  var i1493 = i1491[0]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1493[i + 0]) );
  }
  i1490.scriptsExecutionOrder = i1492
  var i1495 = i1491[1]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1495[i + 0]) );
  }
  i1490.sortingLayers = i1494
  var i1497 = i1491[2]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1497[i + 0]) );
  }
  i1490.cullingLayers = i1496
  i1490.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1491[3], i1490.timeSettings)
  i1490.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1491[4], i1490.physicsSettings)
  i1490.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1491[5], i1490.physics2DSettings)
  i1490.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1491[6], i1490.qualitySettings)
  i1490.enableRealtimeShadows = !!i1491[7]
  i1490.enableAutoInstancing = !!i1491[8]
  i1490.enableDynamicBatching = !!i1491[9]
  i1490.lightmapEncodingQuality = i1491[10]
  i1490.desiredColorSpace = i1491[11]
  var i1499 = i1491[12]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( i1499[i + 0] );
  }
  i1490.allTags = i1498
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1503 = data
  i1502.name = i1503[0]
  i1502.value = i1503[1]
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1507 = data
  i1506.id = i1507[0]
  i1506.name = i1507[1]
  i1506.value = i1507[2]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1511 = data
  i1510.id = i1511[0]
  i1510.name = i1511[1]
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1513 = data
  i1512.fixedDeltaTime = i1513[0]
  i1512.maximumDeltaTime = i1513[1]
  i1512.timeScale = i1513[2]
  i1512.maximumParticleTimestep = i1513[3]
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1515 = data
  i1514.gravity = new pc.Vec3( i1515[0], i1515[1], i1515[2] )
  i1514.defaultSolverIterations = i1515[3]
  i1514.bounceThreshold = i1515[4]
  i1514.autoSyncTransforms = !!i1515[5]
  i1514.autoSimulation = !!i1515[6]
  var i1517 = i1515[7]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1517[i + 0]) );
  }
  i1514.collisionMatrix = i1516
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1521 = data
  i1520.enabled = !!i1521[0]
  i1520.layerId = i1521[1]
  i1520.otherLayerId = i1521[2]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1523 = data
  request.r(i1523[0], i1523[1], 0, i1522, 'material')
  i1522.gravity = new pc.Vec2( i1523[2], i1523[3] )
  i1522.positionIterations = i1523[4]
  i1522.velocityIterations = i1523[5]
  i1522.velocityThreshold = i1523[6]
  i1522.maxLinearCorrection = i1523[7]
  i1522.maxAngularCorrection = i1523[8]
  i1522.maxTranslationSpeed = i1523[9]
  i1522.maxRotationSpeed = i1523[10]
  i1522.baumgarteScale = i1523[11]
  i1522.baumgarteTOIScale = i1523[12]
  i1522.timeToSleep = i1523[13]
  i1522.linearSleepTolerance = i1523[14]
  i1522.angularSleepTolerance = i1523[15]
  i1522.defaultContactOffset = i1523[16]
  i1522.autoSimulation = !!i1523[17]
  i1522.queriesHitTriggers = !!i1523[18]
  i1522.queriesStartInColliders = !!i1523[19]
  i1522.callbacksOnDisable = !!i1523[20]
  i1522.reuseCollisionCallbacks = !!i1523[21]
  i1522.autoSyncTransforms = !!i1523[22]
  var i1525 = i1523[23]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1525[i + 0]) );
  }
  i1522.collisionMatrix = i1524
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1529 = data
  i1528.enabled = !!i1529[0]
  i1528.layerId = i1529[1]
  i1528.otherLayerId = i1529[2]
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1531 = data
  var i1533 = i1531[0]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1533[i + 0]) );
  }
  i1530.qualityLevels = i1532
  var i1535 = i1531[1]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.push( i1535[i + 0] );
  }
  i1530.names = i1534
  i1530.shadows = i1531[2]
  i1530.anisotropicFiltering = i1531[3]
  i1530.antiAliasing = i1531[4]
  i1530.lodBias = i1531[5]
  i1530.shadowCascades = i1531[6]
  i1530.shadowDistance = i1531[7]
  i1530.shadowmaskMode = i1531[8]
  i1530.shadowProjection = i1531[9]
  i1530.shadowResolution = i1531[10]
  i1530.softParticles = !!i1531[11]
  i1530.softVegetation = !!i1531[12]
  i1530.activeColorSpace = i1531[13]
  i1530.desiredColorSpace = i1531[14]
  i1530.masterTextureLimit = i1531[15]
  i1530.maxQueuedFrames = i1531[16]
  i1530.particleRaycastBudget = i1531[17]
  i1530.pixelLightCount = i1531[18]
  i1530.realtimeReflectionProbes = !!i1531[19]
  i1530.shadowCascade2Split = i1531[20]
  i1530.shadowCascade4Split = new pc.Vec3( i1531[21], i1531[22], i1531[23] )
  i1530.streamingMipmapsActive = !!i1531[24]
  i1530.vSyncCount = i1531[25]
  i1530.asyncUploadBufferSize = i1531[26]
  i1530.asyncUploadTimeSlice = i1531[27]
  i1530.billboardsFaceCameraPosition = !!i1531[28]
  i1530.shadowNearPlaneOffset = i1531[29]
  i1530.streamingMipmapsMemoryBudget = i1531[30]
  i1530.maximumLODLevel = i1531[31]
  i1530.streamingMipmapsAddAllCameras = !!i1531[32]
  i1530.streamingMipmapsMaxLevelReduction = i1531[33]
  i1530.streamingMipmapsRenderersPerFrame = i1531[34]
  i1530.resolutionScalingFixedDPIFactor = i1531[35]
  i1530.streamingMipmapsMaxFileIORequests = i1531[36]
  i1530.currentQualityLevel = i1531[37]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1539 = data
  i1538.name = i1539[0]
  var i1541 = i1539[1]
  var i1540 = []
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1541[i + 0]) );
  }
  i1538.tos = i1540
  var i1543 = i1539[2]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.push( i1543[i + 0] );
  }
  i1538.constant = i1542
  i1538.isValid = !!i1539[3]
  i1538.isHuman = !!i1539[4]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1547 = data
  i1546.hash = i1547[0]
  i1546.path = i1547[1]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1551 = data
  i1550.weight = i1551[0]
  i1550.vertices = i1551[1]
  i1550.normals = i1551[2]
  i1550.tangents = i1551[3]
  return i1550
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"humanBones":6,"enabled":7},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[23],"39":[3],"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[41],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[49],"57":[49],"58":[49],"59":[49],"60":[49],"61":[49],"62":[3],"63":[27],"64":[65],"66":[65],"7":[6],"67":[6],"68":[11,6],"69":[27],"70":[11,6],"71":[6],"72":[27,6],"73":[6,11],"74":[6],"75":[6],"76":[6],"10":[7],"12":[11,6],"77":[6],"9":[7],"78":[6],"79":[6],"80":[6],"81":[6],"82":[6],"83":[6],"84":[6],"85":[6],"86":[6],"87":[11,6],"88":[6],"89":[6],"90":[6],"91":[6],"14":[11,6],"92":[6],"93":[16],"94":[16],"17":[16],"95":[16],"96":[3],"97":[3]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Avatar","UnityEngine.MonoBehaviour","PlayerController","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.SpriteRenderer","GachaController","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2020.3.42f1";

Deserializers.productName = "LunaSample_Gsk";

Deserializers.lunaInitializationTime = "10/23/2023 02:45:43";

Deserializers.lunaDaysRunning = "0.3";

Deserializers.lunaVersion = "5.3.0";

Deserializers.lunaSHA = "1f13c8ab746b672a71592a697e719b6f623ec973";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "18268";

Deserializers.projectId = "7067a8d05e53d2f46a9e6cc57c118a8d";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.4.8\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1567";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3162";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.LunaSample-Gsk";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "322817d1-063f-4150-846e-30ce6c3a703e";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

