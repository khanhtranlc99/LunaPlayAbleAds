if ( TRACE ) { TRACE( JSON.parse( '["GachaController#Start","GachaController#Rotate","Gks.AnimatorExt#PlayAndWait","Gks.AnimatorExt#SetTriggerAndWait","Gks.WaitForAnimationToFinish#StateInfo#get","Gks.WaitForAnimationToFinish#CorrectAnimationIsPlaying#get","Gks.WaitForAnimationToFinish#AnimationIsDone#get","Gks.WaitForAnimationToFinish#keepWaiting#get","Gks.WaitForAnimationToFinish#init","Gks.WaitForAnimationToFinish#ctor","Gks.WaitForAnimationToFinish#IsRun","Gks.WaitForAnimationToStart#StateInfo#get","Gks.WaitForAnimationToStart#CorrectAnimationIsPlaying#get","Gks.WaitForAnimationToStart#AnimationStarted#get","Gks.WaitForAnimationToStart#keepWaiting#get","Gks.WaitForAnimationToStart#init","Gks.WaitForAnimationToStart#ctor","Gks.WaitForAnimationToStart#IsRun","MyDoTween#init","MyDoTween#MyDoMove","MyDoTween#MoveToTarget","MyDoTween#MyDoRotate","MyDoTween#RotateToTarget","PlayerController#HandleActionPlayAndWait","PlayerController#Start","PlayerController#Update","PlayerController#Move","PlayerController#Kick","PlayerController#Punch"]' ) ); }
/**
 * @version 1.0.8696.31568
 * @copyright anton
 * @compiler Bridge.NET 17.9.38-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*GachaController start.*/
    Bridge.define("GachaController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            transformLeft: null,
            transformRight: null,
            arrow: null
        },
        methods: {
            /*GachaController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GachaController#Start", this ); }

                this.Rotate();
            },
            /*GachaController.Start end.*/

            /*GachaController.Rotate start.*/
            Rotate: function () {
if ( TRACE ) { TRACE( "GachaController#Rotate", this ); }

                MyDoTween.MyDoRotate(this.arrow.transform, this, this.transformLeft, 10);
            },
            /*GachaController.Rotate end.*/


        }
    });
    /*GachaController end.*/

    /*GameController start.*/
    Bridge.define("GameController", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*GameController end.*/

    /*Gks.AnimatorExt start.*/
    Bridge.define("Gks.AnimatorExt", {
        statics: {
            methods: {
                /*Gks.AnimatorExt.PlayAndWait:static start.*/
                /**
                 * Plays an animation and returns a yield-instruction that finishes when
                     the animation is done
                 *
                 * @static
                 * @public
                 * @this Gks.AnimatorExt
                 * @memberof Gks.AnimatorExt
                 * @param   {UnityEngine.Animator}            animator         The animator to play on
                 * @param   {string}                          animationName    The name of the animation
                 * @param   {number}                          layer            The animation-layer
                 * @return  {Gks.WaitForAnimationToFinish}                     The yield-instruction
                 */
                PlayAndWait: function (animator, animationName, layer) {
if ( TRACE ) { TRACE( "Gks.AnimatorExt#PlayAndWait", this ); }

                    if (layer === void 0) { layer = 0; }
                    animator.Play$3(animationName, layer);
                    return new Gks.WaitForAnimationToFinish(animator, animationName, layer);
                },
                /*Gks.AnimatorExt.PlayAndWait:static end.*/

                /*Gks.AnimatorExt.SetTriggerAndWait:static start.*/
                SetTriggerAndWait: function (animator, animationName, layer) {
if ( TRACE ) { TRACE( "Gks.AnimatorExt#SetTriggerAndWait", this ); }

                    if (layer === void 0) { layer = 0; }
                    animator.SetTrigger$1(animationName);
                    return new Gks.WaitForAnimationToFinish(animator, animationName, layer);
                },
                /*Gks.AnimatorExt.SetTriggerAndWait:static end.*/


            }
        }
    });
    /*Gks.AnimatorExt end.*/

    /*Gks.WaitForAnimationToFinish start.*/
    Bridge.define("Gks.WaitForAnimationToFinish", {
        inherits: [UnityEngine.CustomYieldInstruction],
        fields: {
            animationName: null,
            animator: null,
            layerIndex: 0,
            isWait: false
        },
        props: {
            StateInfo: {
                get: function () {
if ( TRACE ) { TRACE( "Gks.WaitForAnimationToFinish#StateInfo#get", this ); }

                    return this.animator.GetCurrentAnimatorStateInfo(this.layerIndex);
                }
            },
            CorrectAnimationIsPlaying: {
                get: function () {
if ( TRACE ) { TRACE( "Gks.WaitForAnimationToFinish#CorrectAnimationIsPlaying#get", this ); }

                    return this.StateInfo.IsName(this.animationName);
                }
            },
            AnimationIsDone: {
                get: function () {
if ( TRACE ) { TRACE( "Gks.WaitForAnimationToFinish#AnimationIsDone#get", this ); }

                    return this.StateInfo.normalizedTime >= 1;
                }
            },
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "Gks.WaitForAnimationToFinish#keepWaiting#get", this ); }

                    return this.IsRun();
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Gks.WaitForAnimationToFinish#init", this ); }

                this.isWait = true;
            },
            /**
             * Creates a new yield-instruction
             *
             * @instance
             * @public
             * @this Gks.WaitForAnimationToFinish
             * @memberof Gks.WaitForAnimationToFinish
             * @param   {UnityEngine.Animator}    animator         The animator to track
             * @param   {string}                  animationName    The name of the animation
             * @param   {number}                  layerIndex       The layer the animation is playing on
             * @return  {void}
             */
            ctor: function (animator, animationName, layerIndex) {
if ( TRACE ) { TRACE( "Gks.WaitForAnimationToFinish#ctor", this ); }

                if (layerIndex === void 0) { layerIndex = 0; }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.animator = animator;
                this.layerIndex = layerIndex;
                this.animationName = animationName;
            }
        },
        methods: {
            /*Gks.WaitForAnimationToFinish.IsRun start.*/
            IsRun: function () {
if ( TRACE ) { TRACE( "Gks.WaitForAnimationToFinish#IsRun", this ); }

                if (this.isWait) {
                    if (this.CorrectAnimationIsPlaying) {
                        this.isWait = false;
                    }
                } else {
                    return !this.AnimationIsDone;
                }

                return true;
            },
            /*Gks.WaitForAnimationToFinish.IsRun end.*/


        }
    });
    /*Gks.WaitForAnimationToFinish end.*/

    /*Gks.WaitForAnimationToStart start.*/
    Bridge.define("Gks.WaitForAnimationToStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        fields: {
            animationName: null,
            animator: null,
            layerIndex: 0,
            isWait: false
        },
        props: {
            StateInfo: {
                get: function () {
if ( TRACE ) { TRACE( "Gks.WaitForAnimationToStart#StateInfo#get", this ); }

                    return this.animator.GetCurrentAnimatorStateInfo(this.layerIndex);
                }
            },
            CorrectAnimationIsPlaying: {
                get: function () {
if ( TRACE ) { TRACE( "Gks.WaitForAnimationToStart#CorrectAnimationIsPlaying#get", this ); }

                    return this.StateInfo.IsName(this.animationName);
                }
            },
            AnimationStarted: {
                get: function () {
if ( TRACE ) { TRACE( "Gks.WaitForAnimationToStart#AnimationStarted#get", this ); }

                    return this.StateInfo.normalizedTime > 0;
                }
            },
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "Gks.WaitForAnimationToStart#keepWaiting#get", this ); }

                    return this.IsRun();
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Gks.WaitForAnimationToStart#init", this ); }

                this.isWait = true;
            },
            /**
             * Creates a new yield-instruction
             *
             * @instance
             * @public
             * @this Gks.WaitForAnimationToStart
             * @memberof Gks.WaitForAnimationToStart
             * @param   {UnityEngine.Animator}    animator         The animator to track
             * @param   {string}                  animationName    The name of the animation
             * @param   {number}                  layerIndex       The layer the animation is playing on
             * @return  {void}
             */
            ctor: function (animator, animationName, layerIndex) {
if ( TRACE ) { TRACE( "Gks.WaitForAnimationToStart#ctor", this ); }

                if (layerIndex === void 0) { layerIndex = 0; }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.animator = animator;
                this.layerIndex = layerIndex;
                this.animationName = animationName;
            }
        },
        methods: {
            /*Gks.WaitForAnimationToStart.IsRun start.*/
            IsRun: function () {
if ( TRACE ) { TRACE( "Gks.WaitForAnimationToStart#IsRun", this ); }

                if (this.isWait) {
                    if (this.CorrectAnimationIsPlaying) {
                        this.isWait = false;
                    }
                } else {
                    return !this.AnimationStarted;
                }

                return true;
            },
            /*Gks.WaitForAnimationToStart.IsRun end.*/


        }
    });
    /*Gks.WaitForAnimationToStart end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*MyDoTween start.*/
    Bridge.define("MyDoTween", {
        statics: {
            fields: {
                isMoving: false,
                isRotate: false
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "MyDoTween#init", this ); }

                    this.isMoving = false;
                    this.isRotate = false;
                }
            },
            methods: {
                /*MyDoTween.MyDoMove:static start.*/
                MyDoMove: function (transform, monoBehaviour, targetPosition, speed, callBack) {
if ( TRACE ) { TRACE( "MyDoTween#MyDoMove", this ); }

                    if (callBack === void 0) { callBack = null; }

                    if (!MyDoTween.isMoving) {
                        // Lấy vị trí hiện tại của đối tượng
                        var currentPosition = transform.position.$clone();
                        // Lấy vị trí mục tiêu
                        var target = targetPosition.position.$clone();

                        // Tính toán hướng di chuyển và đơn vị hóa nó
                        var direction = (target.$clone().sub( currentPosition )).clone().normalize().$clone();

                        // Bắt đầu di chuyển bằng cách gọi coroutine
                        monoBehaviour.StartCoroutine$1(MyDoTween.MoveToTarget(transform, target.$clone(), direction.$clone(), speed, callBack));
                    }
                },
                /*MyDoTween.MyDoMove:static end.*/

                /*MyDoTween.MoveToTarget:static start.*/
                MoveToTarget: function (currentTranform, target, direction, speed, callBack) {
if ( TRACE ) { TRACE( "MyDoTween#MoveToTarget", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        if (callBack === void 0) { callBack = null; }

                                            MyDoTween.isMoving = true;
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        if ( pc.Vec3.distance( currentTranform.position, target ) > 1 ) {
                                                $step = 2;
                                                continue;
                                            } 
                                            $step = 4;
                                            continue;
                                    }
                                    case 2: {
                                        // Di chuyển đối tượng theo hướng và tốc độ đã cho
                                            currentTranform.position = currentTranform.position.$clone().add( direction.$clone().clone().scale( speed ).clone().scale( UnityEngine.Time.deltaTime ) );

                                            $enumerator.current = null;
                                            $step = 3;
                                            return true;
                                    }
                                    case 3: {
                                        
                                            $step = 1;
                                            continue;
                                    }
                                    case 4: {
                                        // Đảm bảo đối tượng đến đúng vị trí


                                            if (!Bridge.staticEquals(callBack, null)) {
                                                !Bridge.staticEquals(callBack, null) ? callBack() : null;
                                            }
                                            MyDoTween.isMoving = false;

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*MyDoTween.MoveToTarget:static end.*/

                /*MyDoTween.MyDoRotate:static start.*/
                MyDoRotate: function (transform, monoBehaviour, targetPosition, speed, callBack) {
if ( TRACE ) { TRACE( "MyDoTween#MyDoRotate", this ); }

                    if (callBack === void 0) { callBack = null; }
                    if (!MyDoTween.isRotate) {
                        // Lấy vị trí hiện tại của đối tượng
                        var currentPosition = transform.localEulerAngles.$clone();
                        // Lấy vị trí mục tiêu
                        var target = targetPosition.localEulerAngles.$clone();

                        // Tính toán hướng di chuyển và đơn vị hóa nó
                        var direction = (target.$clone().sub( currentPosition )).clone().normalize().$clone();

                        // Bắt đầu di chuyển bằng cách gọi coroutine
                        monoBehaviour.StartCoroutine$1(MyDoTween.RotateToTarget(transform, target.$clone(), direction.$clone(), speed, callBack));
                    }
                },
                /*MyDoTween.MyDoRotate:static end.*/

                /*MyDoTween.RotateToTarget:static start.*/
                RotateToTarget: function (currentTranform, target, direction, speed, callBack) {
if ( TRACE ) { TRACE( "MyDoTween#RotateToTarget", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        if (callBack === void 0) { callBack = null; }
                                            MyDoTween.isRotate = true;
                                        $step = 1;
                                        continue;
                                    }
                                    case 1: {
                                        if ( pc.Vec3.distance( currentTranform.position, target ) > 1 ) {
                                                $step = 2;
                                                continue;
                                            } 
                                            $step = 4;
                                            continue;
                                    }
                                    case 2: {
                                        // Di chuyển đối tượng theo hướng và tốc độ đã cho
                                            currentTranform.localEulerAngles = currentTranform.localEulerAngles.$clone().add( direction.$clone().clone().scale( speed ).clone().scale( UnityEngine.Time.deltaTime ) );

                                            $enumerator.current = null;
                                            $step = 3;
                                            return true;
                                    }
                                    case 3: {
                                        
                                            $step = 1;
                                            continue;
                                    }
                                    case 4: {
                                        // Đảm bảo đối tượng đến đúng vị trí

                                            MyDoTween.isRotate = false;
                                            if (!Bridge.staticEquals(callBack, null)) {
                                                !Bridge.staticEquals(callBack, null) ? callBack() : null;
                                            }

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*MyDoTween.RotateToTarget:static end.*/


            }
        }
    });
    /*MyDoTween end.*/

    /*PlayerController start.*/
    Bridge.define("PlayerController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*PlayerController.HandleActionPlayAndWait:static start.*/
                HandleActionPlayAndWait: function (animator, param, callBack) {
if ( TRACE ) { TRACE( "PlayerController#HandleActionPlayAndWait", this ); }

                    var $step = 0,
                        $jumpFromFinally,
                        $returnValue,
                        $async_e;

                    var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                switch ($step) {
                                    case 0: {
                                        $enumerator.current = Gks.AnimatorExt.PlayAndWait(animator, param);
                                            $step = 1;
                                            return true;
                                    }
                                    case 1: {
                                        !Bridge.staticEquals(callBack, null) ? callBack() : null;

                                    }
                                    default: {
                                        return false;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            throw $async_e;
                        }
                    }));
                    return $enumerator;
                },
                /*PlayerController.HandleActionPlayAndWait:static end.*/


            }
        },
        fields: {
            animator: null,
            targetPosition: null,
            fisrtPossition: null
        },
        methods: {
            /*PlayerController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayerController#Start", this ); }


            },
            /*PlayerController.Start end.*/

            /*PlayerController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayerController#Update", this ); }


                if (UnityEngine.Input.GetMouseButton(0)) {
                    this.Move();
                }


            },
            /*PlayerController.Update end.*/

            /*PlayerController.Move start.*/
            Move: function () {
if ( TRACE ) { TRACE( "PlayerController#Move", this ); }


                MyDoTween.MyDoMove(this.transform, this, this.targetPosition, 10, Bridge.fn.bind(this, function () {
                    MyDoTween.isMoving = false;

                    this.StartCoroutine$1(PlayerController.HandleActionPlayAndWait(this.animator, "Punch3", Bridge.fn.bind(this, function () {

                        this.animator.Play$2("Idle 2");
                        MyDoTween.MyDoMove(this.transform, this, this.fisrtPossition, 15, function () { });
                    })));



                }));
            },
            /*PlayerController.Move end.*/

            /*PlayerController.Kick start.*/
            Kick: function () {
if ( TRACE ) { TRACE( "PlayerController#Kick", this ); }

                this.animator.Play$2("Kick3");
            },
            /*PlayerController.Kick end.*/

            /*PlayerController.Punch start.*/
            Punch: function () {
if ( TRACE ) { TRACE( "PlayerController#Punch", this ); }


                this.animator.Play$2("Punch3");


            },
            /*PlayerController.Punch end.*/


        }
    });
    /*PlayerController end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections","Gks"];

    /*GachaController start.*/
    $m("GachaController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Rotate","t":8,"sn":"Rotate","rt":$n[0].Void},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"arrow","t":4,"rt":$n[1].Transform,"sn":"arrow"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"transformLeft","t":4,"rt":$n[1].Transform,"sn":"transformLeft"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"transformRight","t":4,"rt":$n[1].Transform,"sn":"transformRight"}]}; }, $n);
    /*GachaController end.*/

    /*GameController start.*/
    $m("GameController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*GameController end.*/

    /*MyDoTween start.*/
    $m("MyDoTween", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":1,"n":"MoveToTarget","is":true,"t":8,"pi":[{"n":"currentTranform","pt":$n[1].Transform,"ps":0},{"n":"target","pt":$n[1].Vector3,"ps":1},{"n":"direction","pt":$n[1].Vector3,"ps":2},{"n":"speed","pt":$n[0].Single,"ps":3},{"n":"callBack","dv":null,"o":true,"pt":Function,"ps":4}],"sn":"MoveToTarget","rt":$n[2].IEnumerator,"p":[$n[1].Transform,$n[1].Vector3,$n[1].Vector3,$n[0].Single,Function]},{"a":2,"n":"MyDoMove","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"monoBehaviour","pt":$n[1].MonoBehaviour,"ps":1},{"n":"targetPosition","pt":$n[1].Transform,"ps":2},{"n":"speed","pt":$n[0].Single,"ps":3},{"n":"callBack","dv":null,"o":true,"pt":Function,"ps":4}],"sn":"MyDoMove","rt":$n[0].Void,"p":[$n[1].Transform,$n[1].MonoBehaviour,$n[1].Transform,$n[0].Single,Function]},{"a":2,"n":"MyDoRotate","is":true,"t":8,"pi":[{"n":"transform","pt":$n[1].Transform,"ps":0},{"n":"monoBehaviour","pt":$n[1].MonoBehaviour,"ps":1},{"n":"targetPosition","pt":$n[1].Transform,"ps":2},{"n":"speed","pt":$n[0].Single,"ps":3},{"n":"callBack","dv":null,"o":true,"pt":Function,"ps":4}],"sn":"MyDoRotate","rt":$n[0].Void,"p":[$n[1].Transform,$n[1].MonoBehaviour,$n[1].Transform,$n[0].Single,Function]},{"a":1,"n":"RotateToTarget","is":true,"t":8,"pi":[{"n":"currentTranform","pt":$n[1].Transform,"ps":0},{"n":"target","pt":$n[1].Vector3,"ps":1},{"n":"direction","pt":$n[1].Vector3,"ps":2},{"n":"speed","pt":$n[0].Single,"ps":3},{"n":"callBack","dv":null,"o":true,"pt":Function,"ps":4}],"sn":"RotateToTarget","rt":$n[2].IEnumerator,"p":[$n[1].Transform,$n[1].Vector3,$n[1].Vector3,$n[0].Single,Function]},{"a":2,"n":"isMoving","is":true,"t":4,"rt":$n[0].Boolean,"sn":"isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isRotate","is":true,"t":4,"rt":$n[0].Boolean,"sn":"isRotate","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*MyDoTween end.*/

    /*PlayerController start.*/
    $m("PlayerController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"HandleActionPlayAndWait","is":true,"t":8,"pi":[{"n":"animator","pt":$n[1].Animator,"ps":0},{"n":"param","pt":$n[0].String,"ps":1},{"n":"callBack","pt":Function,"ps":2}],"sn":"HandleActionPlayAndWait","rt":$n[2].IEnumerator,"p":[$n[1].Animator,$n[0].String,Function]},{"a":2,"n":"Kick","t":8,"sn":"Kick","rt":$n[0].Void},{"a":1,"n":"Move","t":8,"sn":"Move","rt":$n[0].Void},{"a":2,"n":"Punch","t":8,"sn":"Punch","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"animator","t":4,"rt":$n[1].Animator,"sn":"animator"},{"a":2,"n":"fisrtPossition","t":4,"rt":$n[1].Transform,"sn":"fisrtPossition"},{"a":2,"n":"targetPosition","t":4,"rt":$n[1].Transform,"sn":"targetPosition"}]}; }, $n);
    /*PlayerController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Gks.AnimatorExt start.*/
    $m("Gks.AnimatorExt", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"PlayAndWait","is":true,"t":8,"pi":[{"n":"animator","pt":$n[1].Animator,"ps":0},{"n":"animationName","pt":$n[0].String,"ps":1},{"n":"layer","dv":0,"o":true,"pt":$n[0].Int32,"ps":2}],"sn":"PlayAndWait","rt":$n[3].WaitForAnimationToFinish,"p":[$n[1].Animator,$n[0].String,$n[0].Int32]},{"a":2,"n":"SetTriggerAndWait","is":true,"t":8,"pi":[{"n":"animator","pt":$n[1].Animator,"ps":0},{"n":"animationName","pt":$n[0].String,"ps":1},{"n":"layer","dv":0,"o":true,"pt":$n[0].Int32,"ps":2}],"sn":"SetTriggerAndWait","rt":$n[3].WaitForAnimationToFinish,"p":[$n[1].Animator,$n[0].String,$n[0].Int32]}]}; }, $n);
    /*Gks.AnimatorExt end.*/

    /*Gks.WaitForAnimationToFinish start.*/
    $m("Gks.WaitForAnimationToFinish", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].Animator,$n[0].String,$n[0].Int32],"pi":[{"n":"animator","pt":$n[1].Animator,"ps":0},{"n":"animationName","pt":$n[0].String,"ps":1},{"n":"layerIndex","dv":0,"o":true,"pt":$n[0].Int32,"ps":2}],"sn":"ctor"},{"a":1,"n":"IsRun","t":8,"sn":"IsRun","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"AnimationIsDone","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_AnimationIsDone","t":8,"rt":$n[0].Boolean,"fg":"AnimationIsDone","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"AnimationIsDone"},{"a":1,"n":"CorrectAnimationIsPlaying","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_CorrectAnimationIsPlaying","t":8,"rt":$n[0].Boolean,"fg":"CorrectAnimationIsPlaying","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"CorrectAnimationIsPlaying"},{"a":1,"n":"StateInfo","t":16,"rt":$n[1].AnimatorStateInfo,"g":{"a":1,"n":"get_StateInfo","t":8,"rt":$n[1].AnimatorStateInfo,"fg":"StateInfo"},"fn":"StateInfo"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"animationName","t":4,"rt":$n[0].String,"sn":"animationName","ro":true},{"a":1,"n":"animator","t":4,"rt":$n[1].Animator,"sn":"animator","ro":true},{"a":1,"n":"isWait","t":4,"rt":$n[0].Boolean,"sn":"isWait","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"layerIndex","t":4,"rt":$n[0].Int32,"sn":"layerIndex","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Gks.WaitForAnimationToFinish end.*/

    /*Gks.WaitForAnimationToStart start.*/
    $m("Gks.WaitForAnimationToStart", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].Animator,$n[0].String,$n[0].Int32],"pi":[{"n":"animator","pt":$n[1].Animator,"ps":0},{"n":"animationName","pt":$n[0].String,"ps":1},{"n":"layerIndex","dv":0,"o":true,"pt":$n[0].Int32,"ps":2}],"sn":"ctor"},{"a":1,"n":"IsRun","t":8,"sn":"IsRun","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"AnimationStarted","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_AnimationStarted","t":8,"rt":$n[0].Boolean,"fg":"AnimationStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"AnimationStarted"},{"a":1,"n":"CorrectAnimationIsPlaying","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_CorrectAnimationIsPlaying","t":8,"rt":$n[0].Boolean,"fg":"CorrectAnimationIsPlaying","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"CorrectAnimationIsPlaying"},{"a":1,"n":"StateInfo","t":16,"rt":$n[1].AnimatorStateInfo,"g":{"a":1,"n":"get_StateInfo","t":8,"rt":$n[1].AnimatorStateInfo,"fg":"StateInfo"},"fn":"StateInfo"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"animationName","t":4,"rt":$n[0].String,"sn":"animationName","ro":true},{"a":1,"n":"animator","t":4,"rt":$n[1].Animator,"sn":"animator","ro":true},{"a":1,"n":"isWait","t":4,"rt":$n[0].Boolean,"sn":"isWait","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"layerIndex","t":4,"rt":$n[0].Int32,"sn":"layerIndex","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Gks.WaitForAnimationToStart end.*/

    }});
