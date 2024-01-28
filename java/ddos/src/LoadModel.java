
import weka.core.*;
// import weka.core.converters.CSVLoader;
import java.io.BufferedReader;
import java.io.FileReader;
import weka.classifiers.trees.J48;
// import weka.filters.unsupervised.attribute.AddID;
// import weka.filters.unsupervised.attribute.Remove;
// import weka.filters.Filter;
// import java.io.File;
import java.util.ArrayList;
// import java.util.List;
import weka.core.Attribute;
public class LoadModel {
    public static void main(String[] args) throws Exception {
        // Reading
        J48 mytree = (J48) weka.core.SerializationHelper.read("/home/sanchez/intelliJ/ddos_syn/9Apr_02.model");
        BufferedReader reader = new BufferedReader(new FileReader("/home/sanchez/major_project/syn/11Apr_morning.arff"));
        Instances data = new Instances(reader);

        int count = 0;
        Attribute attribut = data.attribute(0 );
        for (int j=0; j <data.numInstances();j++){
//            System.out.println(count++);
//            System.out.println(data.instance(j));
        }

        // creating new dataset
        Attribute  AFC = new Attribute("AFC");
        Attribute IWBF = new Attribute("IWBF");
        Attribute MSF = new Attribute("Min_Seg_Fwd");
        Attribute FIT = new Attribute("Fwd_IAT_Tot");
        Attribute Flow_Dur = new Attribute("Flow_Dur");
        ArrayList<String> label_nominol = new ArrayList(2);
        label_nominol.add("BENIGN");
        label_nominol.add("Syn");
        Attribute Label = new Attribute("Label", label_nominol);
        ArrayList<Attribute> attributes = new ArrayList(6);

        attributes.add(AFC);
        attributes.add(IWBF);
        attributes.add(MSF);
        attributes.add(FIT);
        attributes.add(Flow_Dur);
        attributes.add(Label);

        Instances race = new Instances("race", attributes, 0);

        ArrayList<String> ID = new ArrayList<String>();
        // when 6 flowID Absent shift=1 & comment first line of for loop
        int shift = 0;
        for (int j=0;j<data.numInstances();j++){
            ID.add(data.instance(j).toString(0));

            Instance instance = new DenseInstance(6);
            instance.setDataset(race);
            instance.setValue(AFC,data.instance(j).value(1-shift));
            instance.setValue(IWBF,data.instance(j).value(2-shift));
            instance.setValue(MSF,data.instance(j).value(3-shift));
            instance.setValue(FIT,data.instance(j).value(4-shift));
            instance.setValue(Flow_Dur,data.instance(j).value(5-shift));
            instance.setValue(Label,data.instance(j).value(6-shift));
            race.add(instance);
        }
//        System.out.println(race);

        //                 Remove FLOW ID attribute
//        Remove removeFilter = new Remove();
//        removeFilter.setAttributeIndices("first");
//        removeFilter.setInputFormat(data);
//        data =  Filter.useFilter(data,removeFilter);

        race.setClassIndex(5);
//        System.out.println(race);
        int syn = 0;
        int benign = 0;
        for (int i = 0; i < race.numInstances(); i++) {
            String act = data.instance(i).stringValue(data.instance(i).numAttributes() - 1);
//            double actual = data.instance(i).classValue();
            Instance inst = race.instance(i);

            double predict = mytree.classifyInstance(inst);
//            String pred = inst.toString(inst.numAttributes() - 1);
            String pred = "";
//            if (predict == 0.0){
//                 pred = "benign";
//                benign++;
//            }
//            else {
//                pred = "syn";
//                syn++;
//            }
            System.out.println(count+++"\t"+predict+"\t"+act);
            if (predict == 1.0) {
//                System.out.println(ID.get(i)+"\t"+pred);
//                System.out.println(predict);
            }
        }
        System.out.println(benign+"\t"+syn);
//        System.out.println(race);
    }
}