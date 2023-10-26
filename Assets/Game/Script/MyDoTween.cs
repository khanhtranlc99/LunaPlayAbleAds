using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Collections;
using System;
public static class MyDoTween
{
    public static bool isMoving = false;
    public static bool isRotate = false;
    public static void MyDoMove(this Transform transform,  MonoBehaviour monoBehaviour, Transform targetPosition, float speed, Action callBack = null)
    {
  
        if (!isMoving)
        {
            // Lấy vị trí hiện tại của đối tượng
            Vector3 currentPosition = transform.position;
            // Lấy vị trí mục tiêu
            Vector3 target = targetPosition.position;

            // Tính toán hướng di chuyển và đơn vị hóa nó
            Vector3 direction = (target - currentPosition).normalized;

            // Bắt đầu di chuyển bằng cách gọi coroutine
            monoBehaviour.StartCoroutine(MoveToTarget(transform, target, direction, speed, callBack));
        }
    }

    private static IEnumerator MoveToTarget(Transform currentTranform, Vector3 target, Vector3 direction, float speed, Action callBack = null)
    {
   
            isMoving = true;
            while (Vector3.Distance(currentTranform.position, target) > 1)
            {
                // Di chuyển đối tượng theo hướng và tốc độ đã cho
                currentTranform.position += direction * speed * Time.deltaTime;

                yield return null;
            }

            // Đảm bảo đối tượng đến đúng vị trí

        
            if(callBack != null)
            {
                callBack?.Invoke();
            }
            isMoving = false;
 
    }



    public static void MyDoRotate(this Transform transform, MonoBehaviour monoBehaviour, Transform targetPosition, float speed, Action callBack = null)
    {
        if (!isRotate)
        {
            // Lấy vị trí hiện tại của đối tượng
            Vector3 currentPosition = transform.localEulerAngles ;
            // Lấy vị trí mục tiêu
            Vector3 target = targetPosition.localEulerAngles;

            // Tính toán hướng di chuyển và đơn vị hóa nó
            Vector3 direction = (target - currentPosition).normalized;

            // Bắt đầu di chuyển bằng cách gọi coroutine
            monoBehaviour.StartCoroutine(RotateToTarget(transform, target, direction, speed, callBack));
        }
    }
    private static IEnumerator RotateToTarget(Transform currentTranform, Vector3 target, Vector3 direction, float speed, Action callBack = null)
    {
        {
            isRotate = true;
            while (Vector3.Distance(currentTranform.position, target) > 1)
            {
                // Di chuyển đối tượng theo hướng và tốc độ đã cho
                currentTranform.localEulerAngles += direction * speed * Time.deltaTime;

                yield return null;
            }

            // Đảm bảo đối tượng đến đúng vị trí

            isRotate = false;
            if (callBack != null)
            {
                callBack?.Invoke();
            }
        }
    }



}
