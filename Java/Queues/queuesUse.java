public class queuesUse{
    public static void main(String[] args) throws QueueFullException, QueueEmptyException {
        queueByArray queueByArray = new queueByArray();
        int[] arr = {1, 2,3,4};
        for(int i=0;i<arr.length;i++){
            queueByArray.enqueue(arr[i]);
        }
        queueByArray.enqueue(10);
        queueByArray.enqueue(25);
        while(!queueByArray.isEmpty()){
            System.out.println(queueByArray.dequeue());
        }
    }
}