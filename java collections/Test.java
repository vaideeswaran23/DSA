public class Test {
    public static void main(String[] args) {
        GenericList<Integer> list = new GenericList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        System.out.println(list.getItemAtIndex(2));
        for(int item : list) {
            System.out.println(item);
        }
    }
}