import java.util.ArrayList;

public class priorityQueueMax<T> {
    private ArrayList<element<T>> heap;

    public priorityQueueMax() {
        heap = new ArrayList<>();
    }

    public void insert(element<T> e) {
        heap.add(e);
        int childIndex = heap.size() - 1;
        int parentIndex = (childIndex - 1) / 2;
        while (childIndex > 0) {
            if (heap.get(childIndex).priority > heap.get(parentIndex).priority) {
                element<T> temp = heap.get(parentIndex);
                heap.set(parentIndex, heap.get(childIndex));
                heap.set(childIndex, temp);
                childIndex = parentIndex;
                parentIndex = (childIndex - 1) / 2;
            } else
                return;

        }
    }

    public T getMax() throws priorityQueueException {
        if (isEmpty())
            throw new priorityQueueException();
        return heap.get(heap.size()-1).value;
    }

    public T removeMax() throws priorityQueueException {
        if(isEmpty()){
            throw new priorityQueueException();
        }
        element<T> output = heap.get(0);
        heap.set(0, heap.get(heap.size() - 1));
        heap.remove(heap.size() - 1);
        int parentIndex = 0;
        int j = 2 * parentIndex + 1, k = 2 * parentIndex + 2;
        while (j < heap.size()) {
            // if (k > heap.size()) {
            //     if (heap.get(j).priority > heap.get(parentIndex).priority) {
            //         element<T> temp = heap.get(parentIndex);
            //         heap.set(parentIndex, heap.get(j));
            //         heap.set(j, temp);
            //     }
            //     return output.value;
            // }
            int maxIndex = 0;
            int max = 0;
            if(k<heap.size())
                max =Math.max(heap.get(j).priority, heap.get(k).priority);
            else
                max = Math.max(heap.get(j).priority, Integer.MIN_VALUE);
            if (max == heap.get(j).priority)
                maxIndex = j;
            else
                maxIndex = k;
            if (heap.get(parentIndex).priority < max) {
                element<T> temp = heap.get(maxIndex);
                heap.set(maxIndex, heap.get(parentIndex));
                heap.set(parentIndex, temp);
                parentIndex = maxIndex;
                j = 2 * parentIndex + 1;
                k = 2 * parentIndex + 2;
            } else {
                return output.value;
            }
        }

        return output.value;
    }

    public boolean isEmpty() {
        return heap.size() == 0;
    }

}
