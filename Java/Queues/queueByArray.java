
public class queueByArray {
    private int data[];
    private int front;
    private int rear;
    private int size;

    public queueByArray() {
        data = new int[5];
        front = -1;
        rear = -1;
        size = 0;
    }

    public queueByArray(int capacity) {
        data = new int[capacity];
        front = -1;
        rear = -1;
        size = 0;
    }

    public int size() {
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public int front() throws QueueEmptyException {
        if (size == 0)
            throw new QueueEmptyException();
        return data[front];
    }

    public void enqueue(int element) throws QueueFullException {
        if (size == data.length) {
            // throw new QueueFullException();
            expandArray();
        }
        data[rear + 1] = element;
        rear = (rear + 1) % data.length;
        size++;
        if (size == 1) {
            front++;
        }
    }

    private void expandArray() {
        int[] data2 = data;
        int index = 0;
        data = new int[data2.length * 2];
        for (int i = front; i < data2.length; i++) {
            data[index++] = data2[i];
        }
        for (int i = 0; i < front - 1; i++) {
            data[index++] = data2[i];
        }
        front = 0;
        rear = index-1;
    }

    public int dequeue() throws QueueEmptyException {
        if (isEmpty()) {
            throw new QueueEmptyException();
        }
        int temp = data[front];
        front = (front + 1) % data.length;
        size--;
        if (size == 0) {
            front = -1;
            rear = -1;
        }
        return temp;
    }

}
