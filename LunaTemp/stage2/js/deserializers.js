var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1940 = root || request.c( 'UnityEngine.JointSpring' )
  var i1941 = data
  i1940.spring = i1941[0]
  i1940.damper = i1941[1]
  i1940.targetPosition = i1941[2]
  return i1940
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.JointMotor' )
  var i1943 = data
  i1942.m_TargetVelocity = i1943[0]
  i1942.m_Force = i1943[1]
  i1942.m_FreeSpin = i1943[2]
  return i1942
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1944 = root || request.c( 'UnityEngine.JointLimits' )
  var i1945 = data
  i1944.m_Min = i1945[0]
  i1944.m_Max = i1945[1]
  i1944.m_Bounciness = i1945[2]
  i1944.m_BounceMinVelocity = i1945[3]
  i1944.m_ContactDistance = i1945[4]
  i1944.minBounce = i1945[5]
  i1944.maxBounce = i1945[6]
  return i1944
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1946 = root || request.c( 'UnityEngine.JointDrive' )
  var i1947 = data
  i1946.m_PositionSpring = i1947[0]
  i1946.m_PositionDamper = i1947[1]
  i1946.m_MaximumForce = i1947[2]
  return i1946
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1948 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1949 = data
  i1948.m_Spring = i1949[0]
  i1948.m_Damper = i1949[1]
  return i1948
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1951 = data
  i1950.m_Limit = i1951[0]
  i1950.m_Bounciness = i1951[1]
  i1950.m_ContactDistance = i1951[2]
  return i1950
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1953 = data
  i1952.m_ExtremumSlip = i1953[0]
  i1952.m_ExtremumValue = i1953[1]
  i1952.m_AsymptoteSlip = i1953[2]
  i1952.m_AsymptoteValue = i1953[3]
  i1952.m_Stiffness = i1953[4]
  return i1952
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1955 = data
  i1954.m_LowerAngle = i1955[0]
  i1954.m_UpperAngle = i1955[1]
  return i1954
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1957 = data
  i1956.m_MotorSpeed = i1957[0]
  i1956.m_MaximumMotorTorque = i1957[1]
  return i1956
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1959 = data
  i1958.m_DampingRatio = i1959[0]
  i1958.m_Frequency = i1959[1]
  i1958.m_Angle = i1959[2]
  return i1958
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1961 = data
  i1960.m_LowerTranslation = i1961[0]
  i1960.m_UpperTranslation = i1961[1]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1962 = root || new pc.UnityMaterial()
  var i1963 = data
  i1962.name = i1963[0]
  request.r(i1963[1], i1963[2], 0, i1962, 'shader')
  i1962.renderQueue = i1963[3]
  i1962.enableInstancing = !!i1963[4]
  var i1965 = i1963[5]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1965[i + 0]) );
  }
  i1962.floatParameters = i1964
  var i1967 = i1963[6]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1967[i + 0]) );
  }
  i1962.colorParameters = i1966
  var i1969 = i1963[7]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1969[i + 0]) );
  }
  i1962.vectorParameters = i1968
  var i1971 = i1963[8]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1971[i + 0]) );
  }
  i1962.textureParameters = i1970
  var i1973 = i1963[9]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1973[i + 0]) );
  }
  i1962.materialFlags = i1972
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1977 = data
  i1976.name = i1977[0]
  i1976.value = i1977[1]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1981 = data
  i1980.name = i1981[0]
  i1980.value = new pc.Color(i1981[1], i1981[2], i1981[3], i1981[4])
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1985 = data
  i1984.name = i1985[0]
  i1984.value = new pc.Vec4( i1985[1], i1985[2], i1985[3], i1985[4] )
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1989 = data
  i1988.name = i1989[0]
  request.r(i1989[1], i1989[2], 0, i1988, 'value')
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1993 = data
  i1992.name = i1993[0]
  i1992.enabled = !!i1993[1]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1995 = data
  i1994.name = i1995[0]
  i1994.width = i1995[1]
  i1994.height = i1995[2]
  i1994.mipmapCount = i1995[3]
  i1994.anisoLevel = i1995[4]
  i1994.filterMode = i1995[5]
  i1994.hdr = !!i1995[6]
  i1994.format = i1995[7]
  i1994.wrapMode = i1995[8]
  i1994.alphaIsTransparency = !!i1995[9]
  i1994.alphaSource = i1995[10]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1997 = data
  i1996.name = i1997[0]
  i1996.halfPrecision = !!i1997[1]
  i1996.vertexCount = i1997[2]
  i1996.aabb = i1997[3]
  var i1999 = i1997[4]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( !!i1999[i + 0] );
  }
  i1996.streams = i1998
  i1996.vertices = i1997[5]
  var i2001 = i1997[6]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2001[i + 0]) );
  }
  i1996.subMeshes = i2000
  var i2003 = i1997[7]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 16) {
    i2002.push( new pc.Mat4().setData(i2003[i + 0], i2003[i + 1], i2003[i + 2], i2003[i + 3],  i2003[i + 4], i2003[i + 5], i2003[i + 6], i2003[i + 7],  i2003[i + 8], i2003[i + 9], i2003[i + 10], i2003[i + 11],  i2003[i + 12], i2003[i + 13], i2003[i + 14], i2003[i + 15]) );
  }
  i1996.bindposes = i2002
  var i2005 = i1997[8]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2005[i + 0]) );
  }
  i1996.blendShapes = i2004
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2011 = data
  i2010.triangles = i2011[0]
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2017 = data
  i2016.name = i2017[0]
  var i2019 = i2017[1]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 1) {
    i2018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2019[i + 0]) );
  }
  i2016.frames = i2018
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2021 = data
  i2020.name = i2021[0]
  i2020.atlasId = i2021[1]
  i2020.mipmapCount = i2021[2]
  i2020.hdr = !!i2021[3]
  i2020.size = i2021[4]
  i2020.anisoLevel = i2021[5]
  i2020.filterMode = i2021[6]
  i2020.wrapMode = i2021[7]
  var i2023 = i2021[8]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 4) {
    i2022.push( UnityEngine.Rect.MinMaxRect(i2023[i + 0], i2023[i + 1], i2023[i + 2], i2023[i + 3]) );
  }
  i2020.rects = i2022
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2027 = data
  i2026.name = i2027[0]
  i2026.index = i2027[1]
  i2026.startup = !!i2027[2]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2029 = data
  i2028.position = new pc.Vec3( i2029[0], i2029[1], i2029[2] )
  i2028.scale = new pc.Vec3( i2029[3], i2029[4], i2029[5] )
  i2028.rotation = new pc.Quat(i2029[6], i2029[7], i2029[8], i2029[9])
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2031 = data
  i2030.enabled = !!i2031[0]
  i2030.aspect = i2031[1]
  i2030.orthographic = !!i2031[2]
  i2030.orthographicSize = i2031[3]
  i2030.backgroundColor = new pc.Color(i2031[4], i2031[5], i2031[6], i2031[7])
  i2030.nearClipPlane = i2031[8]
  i2030.farClipPlane = i2031[9]
  i2030.fieldOfView = i2031[10]
  i2030.depth = i2031[11]
  i2030.clearFlags = i2031[12]
  i2030.cullingMask = i2031[13]
  i2030.rect = i2031[14]
  request.r(i2031[15], i2031[16], 0, i2030, 'targetTexture')
  i2030.usePhysicalProperties = !!i2031[17]
  i2030.focalLength = i2031[18]
  i2030.sensorSize = new pc.Vec2( i2031[19], i2031[20] )
  i2030.lensShift = new pc.Vec2( i2031[21], i2031[22] )
  i2030.gateFit = i2031[23]
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2033 = data
  i2032.name = i2033[0]
  i2032.tagId = i2033[1]
  i2032.enabled = !!i2033[2]
  i2032.isStatic = !!i2033[3]
  i2032.layer = i2033[4]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2035 = data
  i2034.enabled = !!i2035[0]
  i2034.type = i2035[1]
  i2034.color = new pc.Color(i2035[2], i2035[3], i2035[4], i2035[5])
  i2034.cullingMask = i2035[6]
  i2034.intensity = i2035[7]
  i2034.range = i2035[8]
  i2034.spotAngle = i2035[9]
  i2034.shadows = i2035[10]
  i2034.shadowNormalBias = i2035[11]
  i2034.shadowBias = i2035[12]
  i2034.shadowStrength = i2035[13]
  i2034.shadowResolution = i2035[14]
  i2034.lightmapBakeType = i2035[15]
  i2034.renderMode = i2035[16]
  request.r(i2035[17], i2035[18], 0, i2034, 'cookie')
  i2034.cookieSize = i2035[19]
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2037 = data
  i2036.pivot = new pc.Vec2( i2037[0], i2037[1] )
  i2036.anchorMin = new pc.Vec2( i2037[2], i2037[3] )
  i2036.anchorMax = new pc.Vec2( i2037[4], i2037[5] )
  i2036.sizeDelta = new pc.Vec2( i2037[6], i2037[7] )
  i2036.anchoredPosition3D = new pc.Vec3( i2037[8], i2037[9], i2037[10] )
  i2036.rotation = new pc.Quat(i2037[11], i2037[12], i2037[13], i2037[14])
  i2036.scale = new pc.Vec3( i2037[15], i2037[16], i2037[17] )
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2039 = data
  i2038.enabled = !!i2039[0]
  i2038.planeDistance = i2039[1]
  i2038.referencePixelsPerUnit = i2039[2]
  i2038.isFallbackOverlay = !!i2039[3]
  i2038.renderMode = i2039[4]
  i2038.renderOrder = i2039[5]
  i2038.sortingLayerName = i2039[6]
  i2038.sortingOrder = i2039[7]
  i2038.scaleFactor = i2039[8]
  request.r(i2039[9], i2039[10], 0, i2038, 'worldCamera')
  i2038.overrideSorting = !!i2039[11]
  i2038.pixelPerfect = !!i2039[12]
  i2038.targetDisplay = i2039[13]
  i2038.overridePixelPerfect = !!i2039[14]
  return i2038
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2040 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2041 = data
  i2040.m_UiScaleMode = i2041[0]
  i2040.m_ReferencePixelsPerUnit = i2041[1]
  i2040.m_ScaleFactor = i2041[2]
  i2040.m_ReferenceResolution = new pc.Vec2( i2041[3], i2041[4] )
  i2040.m_ScreenMatchMode = i2041[5]
  i2040.m_MatchWidthOrHeight = i2041[6]
  i2040.m_PhysicalUnit = i2041[7]
  i2040.m_FallbackScreenDPI = i2041[8]
  i2040.m_DefaultSpriteDPI = i2041[9]
  i2040.m_DynamicPixelsPerUnit = i2041[10]
  i2040.m_PresetInfoIsWorld = !!i2041[11]
  return i2040
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2042 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2043 = data
  i2042.m_IgnoreReversedGraphics = !!i2043[0]
  i2042.m_BlockingObjects = i2043[1]
  i2042.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2043[2] )
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2045 = data
  i2044.cullTransparentMesh = !!i2045[0]
  return i2044
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2046 = root || request.c( 'UnityEngine.UI.Image' )
  var i2047 = data
  request.r(i2047[0], i2047[1], 0, i2046, 'm_Sprite')
  i2046.m_Type = i2047[2]
  i2046.m_PreserveAspect = !!i2047[3]
  i2046.m_FillCenter = !!i2047[4]
  i2046.m_FillMethod = i2047[5]
  i2046.m_FillAmount = i2047[6]
  i2046.m_FillClockwise = !!i2047[7]
  i2046.m_FillOrigin = i2047[8]
  i2046.m_UseSpriteMesh = !!i2047[9]
  i2046.m_PixelsPerUnitMultiplier = i2047[10]
  request.r(i2047[11], i2047[12], 0, i2046, 'm_Material')
  i2046.m_Maskable = !!i2047[13]
  i2046.m_Color = new pc.Color(i2047[14], i2047[15], i2047[16], i2047[17])
  i2046.m_RaycastTarget = !!i2047[18]
  i2046.m_RaycastPadding = new pc.Vec4( i2047[19], i2047[20], i2047[21], i2047[22] )
  return i2046
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2048 = root || request.c( 'UnityEngine.UI.Text' )
  var i2049 = data
  i2048.m_FontData = request.d('UnityEngine.UI.FontData', i2049[0], i2048.m_FontData)
  i2048.m_Text = i2049[1]
  request.r(i2049[2], i2049[3], 0, i2048, 'm_Material')
  i2048.m_Maskable = !!i2049[4]
  i2048.m_Color = new pc.Color(i2049[5], i2049[6], i2049[7], i2049[8])
  i2048.m_RaycastTarget = !!i2049[9]
  i2048.m_RaycastPadding = new pc.Vec4( i2049[10], i2049[11], i2049[12], i2049[13] )
  return i2048
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2050 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2051 = data
  request.r(i2051[0], i2051[1], 0, i2050, 'm_Font')
  i2050.m_FontSize = i2051[2]
  i2050.m_FontStyle = i2051[3]
  i2050.m_BestFit = !!i2051[4]
  i2050.m_MinSize = i2051[5]
  i2050.m_MaxSize = i2051[6]
  i2050.m_Alignment = i2051[7]
  i2050.m_AlignByGeometry = !!i2051[8]
  i2050.m_RichText = !!i2051[9]
  i2050.m_HorizontalOverflow = i2051[10]
  i2050.m_VerticalOverflow = i2051[11]
  i2050.m_LineSpacing = i2051[12]
  return i2050
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2052 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2053 = data
  request.r(i2053[0], i2053[1], 0, i2052, 'm_FirstSelected')
  i2052.m_sendNavigationEvents = !!i2053[2]
  i2052.m_DragThreshold = i2053[3]
  return i2052
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2054 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2055 = data
  i2054.m_HorizontalAxis = i2055[0]
  i2054.m_VerticalAxis = i2055[1]
  i2054.m_SubmitButton = i2055[2]
  i2054.m_CancelButton = i2055[3]
  i2054.m_InputActionsPerSecond = i2055[4]
  i2054.m_RepeatDelay = i2055[5]
  i2054.m_ForceModuleActive = !!i2055[6]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2057 = data
  request.r(i2057[0], i2057[1], 0, i2056, 'animatorController')
  request.r(i2057[2], i2057[3], 0, i2056, 'avatar')
  i2056.updateMode = i2057[4]
  i2056.hasTransformHierarchy = !!i2057[5]
  var i2059 = i2057[6]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 2) {
  request.r(i2059[i + 0], i2059[i + 1], 2, i2058, '')
  }
  i2056.humanBones = i2058
  i2056.enabled = !!i2057[7]
  return i2056
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i2062 = root || request.c( 'PlayerController' )
  var i2063 = data
  request.r(i2063[0], i2063[1], 0, i2062, 'animator')
  request.r(i2063[2], i2063[3], 0, i2062, 'targetPosition')
  request.r(i2063[4], i2063[5], 0, i2062, 'fisrtPossition')
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2065 = data
  i2064.enabled = !!i2065[0]
  request.r(i2065[1], i2065[2], 0, i2064, 'sharedMaterial')
  var i2067 = i2065[3]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 2) {
  request.r(i2067[i + 0], i2067[i + 1], 2, i2066, '')
  }
  i2064.sharedMaterials = i2066
  i2064.receiveShadows = !!i2065[4]
  i2064.shadowCastingMode = i2065[5]
  i2064.sortingLayerID = i2065[6]
  i2064.sortingOrder = i2065[7]
  i2064.lightmapIndex = i2065[8]
  i2064.lightmapSceneIndex = i2065[9]
  i2064.lightmapScaleOffset = new pc.Vec4( i2065[10], i2065[11], i2065[12], i2065[13] )
  i2064.lightProbeUsage = i2065[14]
  i2064.reflectionProbeUsage = i2065[15]
  request.r(i2065[16], i2065[17], 0, i2064, 'sharedMesh')
  var i2069 = i2065[18]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 2) {
  request.r(i2069[i + 0], i2069[i + 1], 2, i2068, '')
  }
  i2064.bones = i2068
  i2064.updateWhenOffscreen = !!i2065[19]
  i2064.localBounds = i2065[20]
  request.r(i2065[21], i2065[22], 0, i2064, 'rootBone')
  var i2071 = i2065[23]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2071[i + 0]) );
  }
  i2064.blendShapesWeights = i2070
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2077 = data
  i2076.weight = i2077[0]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2079 = data
  request.r(i2079[0], i2079[1], 0, i2078, 'sharedMesh')
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2081 = data
  request.r(i2081[0], i2081[1], 0, i2080, 'additionalVertexStreams')
  i2080.enabled = !!i2081[2]
  request.r(i2081[3], i2081[4], 0, i2080, 'sharedMaterial')
  var i2083 = i2081[5]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 2) {
  request.r(i2083[i + 0], i2083[i + 1], 2, i2082, '')
  }
  i2080.sharedMaterials = i2082
  i2080.receiveShadows = !!i2081[6]
  i2080.shadowCastingMode = i2081[7]
  i2080.sortingLayerID = i2081[8]
  i2080.sortingOrder = i2081[9]
  i2080.lightmapIndex = i2081[10]
  i2080.lightmapSceneIndex = i2081[11]
  i2080.lightmapScaleOffset = new pc.Vec4( i2081[12], i2081[13], i2081[14], i2081[15] )
  i2080.lightProbeUsage = i2081[16]
  i2080.reflectionProbeUsage = i2081[17]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2085 = data
  i2084.enabled = !!i2085[0]
  request.r(i2085[1], i2085[2], 0, i2084, 'sharedMaterial')
  var i2087 = i2085[3]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 2) {
  request.r(i2087[i + 0], i2087[i + 1], 2, i2086, '')
  }
  i2084.sharedMaterials = i2086
  i2084.receiveShadows = !!i2085[4]
  i2084.shadowCastingMode = i2085[5]
  i2084.sortingLayerID = i2085[6]
  i2084.sortingOrder = i2085[7]
  i2084.lightmapIndex = i2085[8]
  i2084.lightmapSceneIndex = i2085[9]
  i2084.lightmapScaleOffset = new pc.Vec4( i2085[10], i2085[11], i2085[12], i2085[13] )
  i2084.lightProbeUsage = i2085[14]
  i2084.reflectionProbeUsage = i2085[15]
  i2084.color = new pc.Color(i2085[16], i2085[17], i2085[18], i2085[19])
  request.r(i2085[20], i2085[21], 0, i2084, 'sprite')
  i2084.flipX = !!i2085[22]
  i2084.flipY = !!i2085[23]
  i2084.drawMode = i2085[24]
  i2084.size = new pc.Vec2( i2085[25], i2085[26] )
  i2084.tileMode = i2085[27]
  i2084.adaptiveModeThreshold = i2085[28]
  i2084.maskInteraction = i2085[29]
  i2084.spriteSortPoint = i2085[30]
  return i2084
}

Deserializers["GachaController"] = function (request, data, root) {
  var i2088 = root || request.c( 'GachaController' )
  var i2089 = data
  request.r(i2089[0], i2089[1], 0, i2088, 'transformLeft')
  request.r(i2089[2], i2089[3], 0, i2088, 'transformRight')
  request.r(i2089[4], i2089[5], 0, i2088, 'arrow')
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2091 = data
  i2090.ambientIntensity = i2091[0]
  i2090.reflectionIntensity = i2091[1]
  i2090.ambientMode = i2091[2]
  i2090.ambientLight = new pc.Color(i2091[3], i2091[4], i2091[5], i2091[6])
  i2090.ambientSkyColor = new pc.Color(i2091[7], i2091[8], i2091[9], i2091[10])
  i2090.ambientGroundColor = new pc.Color(i2091[11], i2091[12], i2091[13], i2091[14])
  i2090.ambientEquatorColor = new pc.Color(i2091[15], i2091[16], i2091[17], i2091[18])
  i2090.fogColor = new pc.Color(i2091[19], i2091[20], i2091[21], i2091[22])
  i2090.fogEndDistance = i2091[23]
  i2090.fogStartDistance = i2091[24]
  i2090.fogDensity = i2091[25]
  i2090.fog = !!i2091[26]
  request.r(i2091[27], i2091[28], 0, i2090, 'skybox')
  i2090.fogMode = i2091[29]
  var i2093 = i2091[30]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2093[i + 0]) );
  }
  i2090.lightmaps = i2092
  i2090.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2091[31], i2090.lightProbes)
  i2090.lightmapsMode = i2091[32]
  i2090.mixedBakeMode = i2091[33]
  i2090.environmentLightingMode = i2091[34]
  i2090.ambientProbe = new pc.SphericalHarmonicsL2(i2091[35])
  i2090.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2091[36])
  i2090.useReferenceAmbientProbe = !!i2091[37]
  request.r(i2091[38], i2091[39], 0, i2090, 'customReflection')
  request.r(i2091[40], i2091[41], 0, i2090, 'defaultReflection')
  i2090.defaultReflectionMode = i2091[42]
  i2090.defaultReflectionResolution = i2091[43]
  i2090.sunLightObjectId = i2091[44]
  i2090.pixelLightCount = i2091[45]
  i2090.defaultReflectionHDR = !!i2091[46]
  i2090.hasLightDataAsset = !!i2091[47]
  i2090.hasManualGenerate = !!i2091[48]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2097 = data
  request.r(i2097[0], i2097[1], 0, i2096, 'lightmapColor')
  request.r(i2097[2], i2097[3], 0, i2096, 'lightmapDirection')
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2098 = root || new UnityEngine.LightProbes()
  var i2099 = data
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2107 = data
  var i2109 = i2107[0]
  var i2108 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2109[i + 0]));
  }
  i2106.ShaderCompilationErrors = i2108
  i2106.name = i2107[1]
  i2106.guid = i2107[2]
  var i2111 = i2107[3]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( i2111[i + 0] );
  }
  i2106.shaderDefinedKeywords = i2110
  var i2113 = i2107[4]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2113[i + 0]) );
  }
  i2106.passes = i2112
  var i2115 = i2107[5]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2115[i + 0]) );
  }
  i2106.usePasses = i2114
  var i2117 = i2107[6]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2117[i + 0]) );
  }
  i2106.defaultParameterValues = i2116
  request.r(i2107[7], i2107[8], 0, i2106, 'unityFallbackShader')
  i2106.readDepth = !!i2107[9]
  i2106.isCreatedByShaderGraph = !!i2107[10]
  i2106.usedBatchUniforms = i2107[11]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2121 = data
  i2120.shaderName = i2121[0]
  i2120.errorMessage = i2121[1]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2126 = root || new pc.UnityShaderPass()
  var i2127 = data
  i2126.id = i2127[0]
  i2126.subShaderIndex = i2127[1]
  i2126.name = i2127[2]
  i2126.passType = i2127[3]
  i2126.grabPassTextureName = i2127[4]
  i2126.usePass = !!i2127[5]
  i2126.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[6], i2126.zTest)
  i2126.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[7], i2126.zWrite)
  i2126.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[8], i2126.culling)
  i2126.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2127[9], i2126.blending)
  i2126.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2127[10], i2126.alphaBlending)
  i2126.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[11], i2126.colorWriteMask)
  i2126.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[12], i2126.offsetUnits)
  i2126.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[13], i2126.offsetFactor)
  i2126.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[14], i2126.stencilRef)
  i2126.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[15], i2126.stencilReadMask)
  i2126.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[16], i2126.stencilWriteMask)
  i2126.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2127[17], i2126.stencilOp)
  i2126.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2127[18], i2126.stencilOpFront)
  i2126.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2127[19], i2126.stencilOpBack)
  var i2129 = i2127[20]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2129[i + 0]) );
  }
  i2126.tags = i2128
  var i2131 = i2127[21]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( i2131[i + 0] );
  }
  i2126.passDefinedKeywords = i2130
  var i2133 = i2127[22]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2133[i + 0]) );
  }
  i2126.passDefinedKeywordGroups = i2132
  var i2135 = i2127[23]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2135[i + 0]) );
  }
  i2126.variants = i2134
  var i2137 = i2127[24]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2137[i + 0]) );
  }
  i2126.excludedVariants = i2136
  i2126.hasDepthReader = !!i2127[25]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2139 = data
  i2138.val = i2139[0]
  i2138.name = i2139[1]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2141 = data
  i2140.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2141[0], i2140.src)
  i2140.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2141[1], i2140.dst)
  i2140.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2141[2], i2140.op)
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2143 = data
  i2142.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2143[0], i2142.pass)
  i2142.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2143[1], i2142.fail)
  i2142.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2143[2], i2142.zFail)
  i2142.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2143[3], i2142.comp)
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2147 = data
  i2146.name = i2147[0]
  i2146.value = i2147[1]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2151 = data
  var i2153 = i2151[0]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( i2153[i + 0] );
  }
  i2150.keywords = i2152
  i2150.hasDiscard = !!i2151[1]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2157 = data
  i2156.passId = i2157[0]
  i2156.subShaderIndex = i2157[1]
  var i2159 = i2157[2]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( i2159[i + 0] );
  }
  i2156.keywords = i2158
  i2156.vertexProgram = i2157[3]
  i2156.fragmentProgram = i2157[4]
  i2156.readDepth = !!i2157[5]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2163 = data
  request.r(i2163[0], i2163[1], 0, i2162, 'shader')
  i2162.pass = i2163[2]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2167 = data
  i2166.name = i2167[0]
  i2166.type = i2167[1]
  i2166.value = new pc.Vec4( i2167[2], i2167[3], i2167[4], i2167[5] )
  i2166.textureValue = i2167[6]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2169 = data
  i2168.name = i2169[0]
  request.r(i2169[1], i2169[2], 0, i2168, 'texture')
  i2168.aabb = i2169[3]
  i2168.vertices = i2169[4]
  i2168.triangles = i2169[5]
  i2168.textureRect = UnityEngine.Rect.MinMaxRect(i2169[6], i2169[7], i2169[8], i2169[9])
  i2168.packedRect = UnityEngine.Rect.MinMaxRect(i2169[10], i2169[11], i2169[12], i2169[13])
  i2168.border = new pc.Vec4( i2169[14], i2169[15], i2169[16], i2169[17] )
  i2168.transparency = i2169[18]
  i2168.bounds = i2169[19]
  i2168.pixelsPerUnit = i2169[20]
  i2168.textureWidth = i2169[21]
  i2168.textureHeight = i2169[22]
  i2168.nativeSize = new pc.Vec2( i2169[23], i2169[24] )
  i2168.pivot = new pc.Vec2( i2169[25], i2169[26] )
  i2168.textureRectOffset = new pc.Vec2( i2169[27], i2169[28] )
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2171 = data
  i2170.name = i2171[0]
  i2170.wrapMode = i2171[1]
  i2170.isLooping = !!i2171[2]
  i2170.length = i2171[3]
  var i2173 = i2171[4]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2173[i + 0]) );
  }
  i2170.curves = i2172
  var i2175 = i2171[5]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2175[i + 0]) );
  }
  i2170.events = i2174
  i2170.halfPrecision = !!i2171[6]
  i2170.frameRate = i2171[7]
  i2170.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2171[8], i2170.localBounds)
  i2170.hasMuscleCurves = !!i2171[9]
  var i2177 = i2171[10]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( i2177[i + 0] );
  }
  i2170.clipMuscleConstant = i2176
  i2170.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2171[11], i2170.clipBindingConstant)
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2181 = data
  i2180.path = i2181[0]
  i2180.componentType = i2181[1]
  i2180.property = i2181[2]
  i2180.keys = i2181[3]
  var i2183 = i2181[4]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2183[i + 0]) );
  }
  i2180.objectReferenceKeys = i2182
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2187 = data
  i2186.time = i2187[0]
  request.r(i2187[1], i2187[2], 0, i2186, 'value')
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2191 = data
  i2190.functionName = i2191[0]
  i2190.floatParameter = i2191[1]
  i2190.intParameter = i2191[2]
  i2190.stringParameter = i2191[3]
  request.r(i2191[4], i2191[5], 0, i2190, 'objectReferenceParameter')
  i2190.time = i2191[6]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2193 = data
  i2192.center = new pc.Vec3( i2193[0], i2193[1], i2193[2] )
  i2192.extends = new pc.Vec3( i2193[3], i2193[4], i2193[5] )
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2197 = data
  var i2199 = i2197[0]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( i2199[i + 0] );
  }
  i2196.genericBindings = i2198
  var i2201 = i2197[1]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( i2201[i + 0] );
  }
  i2196.pptrCurveMapping = i2200
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2203 = data
  i2202.name = i2203[0]
  i2202.ascent = i2203[1]
  i2202.originalLineHeight = i2203[2]
  i2202.fontSize = i2203[3]
  var i2205 = i2203[4]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2205[i + 0]) );
  }
  i2202.characterInfo = i2204
  request.r(i2203[5], i2203[6], 0, i2202, 'texture')
  i2202.originalFontSize = i2203[7]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2209 = data
  i2208.index = i2209[0]
  i2208.advance = i2209[1]
  i2208.bearing = i2209[2]
  i2208.glyphWidth = i2209[3]
  i2208.glyphHeight = i2209[4]
  i2208.minX = i2209[5]
  i2208.maxX = i2209[6]
  i2208.minY = i2209[7]
  i2208.maxY = i2209[8]
  i2208.uvBottomLeftX = i2209[9]
  i2208.uvBottomLeftY = i2209[10]
  i2208.uvBottomRightX = i2209[11]
  i2208.uvBottomRightY = i2209[12]
  i2208.uvTopLeftX = i2209[13]
  i2208.uvTopLeftY = i2209[14]
  i2208.uvTopRightX = i2209[15]
  i2208.uvTopRightY = i2209[16]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2211 = data
  i2210.name = i2211[0]
  var i2213 = i2211[1]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2213[i + 0]) );
  }
  i2210.states = i2212
  var i2215 = i2211[2]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2215[i + 0]) );
  }
  i2210.layers = i2214
  var i2217 = i2211[3]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 1) {
    i2216.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2217[i + 0]) );
  }
  i2210.parameters = i2216
  i2210.animationClips = i2211[4]
  i2210.HasSubStateMachines = !!i2211[5]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2221 = data
  i2220.cycleOffset = i2221[0]
  i2220.cycleOffsetParameter = i2221[1]
  i2220.cycleOffsetParameterActive = !!i2221[2]
  i2220.mirror = !!i2221[3]
  i2220.mirrorParameter = i2221[4]
  i2220.mirrorParameterActive = !!i2221[5]
  i2220.motionId = i2221[6]
  i2220.nameHash = i2221[7]
  i2220.fullPathHash = i2221[8]
  i2220.speed = i2221[9]
  i2220.speedParameter = i2221[10]
  i2220.speedParameterActive = !!i2221[11]
  i2220.tag = i2221[12]
  i2220.name = i2221[13]
  i2220.layer = i2221[14]
  i2220.writeDefaultValues = !!i2221[15]
  var i2223 = i2221[16]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2223[i + 0]) );
  }
  i2220.transitions = i2222
  var i2225 = i2221[17]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 2) {
  request.r(i2225[i + 0], i2225[i + 1], 2, i2224, '')
  }
  i2220.behaviours = i2224
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2229 = data
  i2228.fullPath = i2229[0]
  i2228.canTransitionToSelf = !!i2229[1]
  i2228.duration = i2229[2]
  i2228.exitTime = i2229[3]
  i2228.hasExitTime = !!i2229[4]
  i2228.hasFixedDuration = !!i2229[5]
  i2228.interruptionSource = i2229[6]
  i2228.offset = i2229[7]
  i2228.orderedInterruption = !!i2229[8]
  i2228.destinationStateNameHash = i2229[9]
  i2228.destinationStateMachineId = i2229[10]
  i2228.isExit = !!i2229[11]
  i2228.mute = !!i2229[12]
  i2228.solo = !!i2229[13]
  var i2231 = i2229[14]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2231[i + 0]) );
  }
  i2228.conditions = i2230
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2237 = data
  i2236.mode = i2237[0]
  i2236.parameter = i2237[1]
  i2236.threshold = i2237[2]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2241 = data
  i2240.blendingMode = i2241[0]
  i2240.defaultWeight = i2241[1]
  i2240.name = i2241[2]
  i2240.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2241[3], i2240.stateMachine)
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2243 = data
  i2242.id = i2243[0]
  i2242.defaultStateNameHash = i2243[1]
  var i2245 = i2243[2]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2245[i + 0]) );
  }
  i2242.entryTransitions = i2244
  var i2247 = i2243[3]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2247[i + 0]) );
  }
  i2242.anyStateTransitions = i2246
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2251 = data
  i2250.destinationStateNameHash = i2251[0]
  i2250.destinationStateMachineId = i2251[1]
  i2250.isExit = !!i2251[2]
  i2250.mute = !!i2251[3]
  i2250.solo = !!i2251[4]
  var i2253 = i2251[5]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2253[i + 0]) );
  }
  i2250.conditions = i2252
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2257 = data
  i2256.defaultBool = !!i2257[0]
  i2256.defaultFloat = i2257[1]
  i2256.defaultInt = i2257[2]
  i2256.name = i2257[3]
  i2256.nameHash = i2257[4]
  i2256.type = i2257[5]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2259 = data
  var i2261 = i2259[0]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2261[i + 0]) );
  }
  i2258.files = i2260
  i2258.componentToPrefabIds = i2259[1]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2265 = data
  i2264.path = i2265[0]
  request.r(i2265[1], i2265[2], 0, i2264, 'unityObject')
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2267 = data
  var i2269 = i2267[0]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2269[i + 0]) );
  }
  i2266.scriptsExecutionOrder = i2268
  var i2271 = i2267[1]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2271[i + 0]) );
  }
  i2266.sortingLayers = i2270
  var i2273 = i2267[2]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2273[i + 0]) );
  }
  i2266.cullingLayers = i2272
  i2266.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2267[3], i2266.timeSettings)
  i2266.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2267[4], i2266.physicsSettings)
  i2266.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2267[5], i2266.physics2DSettings)
  i2266.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2267[6], i2266.qualitySettings)
  i2266.enableRealtimeShadows = !!i2267[7]
  i2266.enableAutoInstancing = !!i2267[8]
  i2266.enableDynamicBatching = !!i2267[9]
  i2266.lightmapEncodingQuality = i2267[10]
  i2266.desiredColorSpace = i2267[11]
  var i2275 = i2267[12]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( i2275[i + 0] );
  }
  i2266.allTags = i2274
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2279 = data
  i2278.name = i2279[0]
  i2278.value = i2279[1]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2283 = data
  i2282.id = i2283[0]
  i2282.name = i2283[1]
  i2282.value = i2283[2]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2287 = data
  i2286.id = i2287[0]
  i2286.name = i2287[1]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2289 = data
  i2288.fixedDeltaTime = i2289[0]
  i2288.maximumDeltaTime = i2289[1]
  i2288.timeScale = i2289[2]
  i2288.maximumParticleTimestep = i2289[3]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2291 = data
  i2290.gravity = new pc.Vec3( i2291[0], i2291[1], i2291[2] )
  i2290.defaultSolverIterations = i2291[3]
  i2290.bounceThreshold = i2291[4]
  i2290.autoSyncTransforms = !!i2291[5]
  i2290.autoSimulation = !!i2291[6]
  var i2293 = i2291[7]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2293[i + 0]) );
  }
  i2290.collisionMatrix = i2292
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2297 = data
  i2296.enabled = !!i2297[0]
  i2296.layerId = i2297[1]
  i2296.otherLayerId = i2297[2]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'material')
  i2298.gravity = new pc.Vec2( i2299[2], i2299[3] )
  i2298.positionIterations = i2299[4]
  i2298.velocityIterations = i2299[5]
  i2298.velocityThreshold = i2299[6]
  i2298.maxLinearCorrection = i2299[7]
  i2298.maxAngularCorrection = i2299[8]
  i2298.maxTranslationSpeed = i2299[9]
  i2298.maxRotationSpeed = i2299[10]
  i2298.baumgarteScale = i2299[11]
  i2298.baumgarteTOIScale = i2299[12]
  i2298.timeToSleep = i2299[13]
  i2298.linearSleepTolerance = i2299[14]
  i2298.angularSleepTolerance = i2299[15]
  i2298.defaultContactOffset = i2299[16]
  i2298.autoSimulation = !!i2299[17]
  i2298.queriesHitTriggers = !!i2299[18]
  i2298.queriesStartInColliders = !!i2299[19]
  i2298.callbacksOnDisable = !!i2299[20]
  i2298.reuseCollisionCallbacks = !!i2299[21]
  i2298.autoSyncTransforms = !!i2299[22]
  var i2301 = i2299[23]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2301[i + 0]) );
  }
  i2298.collisionMatrix = i2300
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2305 = data
  i2304.enabled = !!i2305[0]
  i2304.layerId = i2305[1]
  i2304.otherLayerId = i2305[2]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2307 = data
  var i2309 = i2307[0]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2309[i + 0]) );
  }
  i2306.qualityLevels = i2308
  var i2311 = i2307[1]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( i2311[i + 0] );
  }
  i2306.names = i2310
  i2306.shadows = i2307[2]
  i2306.anisotropicFiltering = i2307[3]
  i2306.antiAliasing = i2307[4]
  i2306.lodBias = i2307[5]
  i2306.shadowCascades = i2307[6]
  i2306.shadowDistance = i2307[7]
  i2306.shadowmaskMode = i2307[8]
  i2306.shadowProjection = i2307[9]
  i2306.shadowResolution = i2307[10]
  i2306.softParticles = !!i2307[11]
  i2306.softVegetation = !!i2307[12]
  i2306.activeColorSpace = i2307[13]
  i2306.desiredColorSpace = i2307[14]
  i2306.masterTextureLimit = i2307[15]
  i2306.maxQueuedFrames = i2307[16]
  i2306.particleRaycastBudget = i2307[17]
  i2306.pixelLightCount = i2307[18]
  i2306.realtimeReflectionProbes = !!i2307[19]
  i2306.shadowCascade2Split = i2307[20]
  i2306.shadowCascade4Split = new pc.Vec3( i2307[21], i2307[22], i2307[23] )
  i2306.streamingMipmapsActive = !!i2307[24]
  i2306.vSyncCount = i2307[25]
  i2306.asyncUploadBufferSize = i2307[26]
  i2306.asyncUploadTimeSlice = i2307[27]
  i2306.billboardsFaceCameraPosition = !!i2307[28]
  i2306.shadowNearPlaneOffset = i2307[29]
  i2306.streamingMipmapsMemoryBudget = i2307[30]
  i2306.maximumLODLevel = i2307[31]
  i2306.streamingMipmapsAddAllCameras = !!i2307[32]
  i2306.streamingMipmapsMaxLevelReduction = i2307[33]
  i2306.streamingMipmapsRenderersPerFrame = i2307[34]
  i2306.resolutionScalingFixedDPIFactor = i2307[35]
  i2306.streamingMipmapsMaxFileIORequests = i2307[36]
  i2306.currentQualityLevel = i2307[37]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2315 = data
  i2314.name = i2315[0]
  var i2317 = i2315[1]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 1) {
    i2316.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2317[i + 0]) );
  }
  i2314.tos = i2316
  var i2319 = i2315[2]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.push( i2319[i + 0] );
  }
  i2314.constant = i2318
  i2314.isValid = !!i2315[3]
  i2314.isHuman = !!i2315[4]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2323 = data
  i2322.hash = i2323[0]
  i2322.path = i2323[1]
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2327 = data
  i2326.weight = i2327[0]
  i2326.vertices = i2327[1]
  i2326.normals = i2327[2]
  i2326.tangents = i2327[3]
  return i2326
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

Deserializers.lunaAppID = "18291";

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

Deserializers.buildID = "07f14951-fc1e-4d06-ac67-b6e2611fa5ba";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

