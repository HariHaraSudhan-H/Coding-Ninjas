public class priorityQueueUse {
    public static void main(String[] args) throws priorityQueueException {
        priorityQueueMin<String> minQueue = new priorityQueueMin<>();
        minQueue.insert(new element<>("Hari", 10));
        
        minQueue.insert(new element<>("Hara", 100));
        minQueue.insert(new element<>("Sudhan", 30));
        minQueue.insert(new element<>("Vishnu", 50));
        minQueue.insert(new element<>("Kumaran", 102));
        while(!minQueue.isEmpty()){
            System.out.println(minQueue.removeMin());
        }
        System.out.println("Max Queue");
        priorityQueueMax<String> maxQueue = new priorityQueueMax<>();
        maxQueue.insert(new element<>("Hari", 10));
        
        maxQueue.insert(new element<>("Hara", 100));
        maxQueue.insert(new element<>("Sudhan", 30));
        maxQueue.insert(new element<>("Vishnu", 50));
        maxQueue.insert(new element<>("Kumaran", 102));
        while(!maxQueue.isEmpty()){
            System.out.println(maxQueue.removeMax());
        }
    }
}
