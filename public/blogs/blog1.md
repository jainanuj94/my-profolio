# Elastic Stack on Kubernetes (ECK) with Service Mesh (Istio)

Elastic offers off the shelve solution for Elasticsearch, Kibana, APM Server on Kubernetes for Elasticsearch on Cloud known as ECK (Elastic Cloud on Kubernetes) https://github.com/elastic/cloud-on-k8s. Sadly, this does not offer support for Logstash, another flagship solution from elastic. There's an open ongoing enhancement request as well on elastic to add Logstash to the ECK solution https://github.com/elastic/cloud-on-k8s/issues/1453, but theres no clear visibility as to when this would be added.

We will mostly focus on deploying ECK on Kubernetes with a service mesh Istio. However, will briefly cover the options that can be looked at for Logstash deployment. I would be using Google Cloud Platform to deploy ECK on Google Kubernetes Engine (GKE).

## What is ECK? How does it work?

ECK is a solution provided by elastic to easily deploy Elastic Stack on Kubernetes. It used Operator Pattern of Kubernetes to help easily manage the elastic stack on Kubernetes.

We use custom resources provided by the elastic-operator like Elasticsearch, Kibana etc, to easily deploy and manage elastic stack. All these resources are linked to the operator and the operator is responsible to manage the entire stack. elastic-operator is required in order to deploy the custom resources, and this operator is deployed under the namespace `elastic-system`.