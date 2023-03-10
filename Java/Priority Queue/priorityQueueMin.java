import java.util.ArrayList;

public class priorityQueueMin<T> {
    private ArrayList<element<T>> heap;

    public priorityQueueMin() {
        heap = new ArrayList<>();
    }

    public void insert(element<T> e) {
        heap.add(e);
        int childIndex = heap.size() - 1;
        int parentIndex = (childIndex - 1) / 2;
        while (childIndex > 0) {
            if (heap.get(childIndex).priority < heap.get(parentIndex).priority) {
                element<T> temp = heap.get(parentIndex);
                heap.set(parentIndex, heap.get(childIndex));
                heap.set(childIndex, temp);
                childIndex = parentIndex;
                parentIndex = (childIndex - 1) / 2;
            } else
                return;

        }
    }

    public T getMin() throws priorityQueueException {
        if (isEmpty())
            throw new priorityQueueException();
        return heap.get(0).value;
    }

    public T removeMin() throws priorityQueueException {
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
            //     if (heap.get(j).priority < heap.get(parentIndex).priority) {
            //         element<T> temp = heap.get(parentIndex);
            //         heap.set(parentIndex, heap.get(j));
            //         heap.set(j, temp);
            //     }
            //     return output.value;
            // }
            int minIndex = 0,min=0;
			if(k<heap.size()){
				min = Math.min(heap.get(j).priority, heap.get(k).priority);
			}else{
				min = Math.min(heap.get(j).priority, Integer.MAX_VALUE);
			}
            if (min == heap.get(j).priority)
                minIndex = j;
            else
                minIndex = k;
            if (heap.get(parentIndex).priority > min) {
                element<T> temp = heap.get(minIndex);
                heap.set(minIndex, heap.get(parentIndex));
                heap.set(parentIndex, temp);
                parentIndex = minIndex;
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
