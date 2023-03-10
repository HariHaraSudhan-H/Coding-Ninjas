public class DynamicArray{
    private int data[];
    private int nextElementIndex;
    public DynamicArray() {
        this.data = new int[5];
        nextElementIndex=0;
    }
    public int size(){
        return nextElementIndex;
    }
    public boolean isEmpty(){
        return nextElementIndex==0;
    }
    public int get(int i){
        //if(i>=nextElementIndex)
        //    return -1;
        return data[i];
    }
    public void set(int i,int newElement){
        if(i>=data.length){
            doubleCapacity();
        }
        if(i>nextElementIndex)
            nextElementIndex=i+1;
        data[i]=newElement;
    }
    public void add(int newElement){
        if(nextElementIndex==data.length){
            doubleCapacity();
        }
        data[nextElementIndex]=newElement;
        nextElementIndex++;
    }
    public void removeLast(){
        data[nextElementIndex-1]=0;
        nextElementIndex--;
    }
    private void doubleCapacity(){
        int[] dataNew = new int[data.length*2]; 
        copyArray(data,dataNew);
        data=dataNew;
    }
    private void copyArray(int[] data, int[] dataNew){
        for(int i=0;i<data.length;i++){
            dataNew[i]=data[i];
        }
    }
    
}