import weka.core.SerializationHelper;
import weka.classifiers.Classifier;

// Load the model file
Classifier classifier = (Classifier) SerializationHelper.read("syn_cross_fold.model");
