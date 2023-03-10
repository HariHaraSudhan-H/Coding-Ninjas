public class stacksByArray {
    private int[] data;
    private int topIndex = -1;

    public stacksByArray() {
        data = new int[1];
        topIndex = -1;
    }

    public int size() {
        return topIndex + 1;
    }
    private void expandArray(){
        int[] data2 = data;
        data=new int[data2.length*2];
        for(int i=0;i<data2.length;i++){
            data[i]=data2[i];
        }
    }
    public void push(int element) throws stackFullException {
        if(topIndex==data.length-1){
            //throw new stackFullException();
            expandArray();
        }
        data[topIndex + 1] = element;
        topIndex++;
    }

    public boolean isEmpty() {
        if (topIndex == -1)
            return true;
        else
            return false;
    }

    public int pop() throws stackEmptyException {
        if(isEmpty())
            throw new stackEmptyException();
        int removedElement = data[topIndex];
        data[topIndex] = 0;
        topIndex--;
        return removedElement;
    }

    public int top() throws stackEmptyException{
        if(isEmpty())
            throw new stackEmptyException();
        return data[topIndex];
    }

}
