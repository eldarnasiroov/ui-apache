export const dataSource = [
  {
    key: '1',
    clusterName: 'cbar',
    version: 5,
    brokersCount: 60,
    partitions: 70,
    topics: 70,
    production: 70,
    consumption: 2,
  },
  {
    key: '2',
    clusterName: 'abar',
    version: 6,
    brokersCount: 60,
    partitions: 70,
    topics: 70,
    production: 70,
    consumption: 1,
  },

];

export const
  columns = [
    {
      title: 'Cluster Name',
      dataIndex: 'clusterName',
      sorter: {
        compare: (a, b) => a.clusterName - b.clusterName,
        multiple: 7,
      },
    },
    {
      title: 'Version',
      dataIndex: 'version',
      sorter: {
        compare: (a, b) => a.version - b.version,
        multiple: 6,
      },
    },
    {
      title: 'Brokers Count',
      dataIndex: 'brokersCount',
      sorter: {
        compare: (a, b) => a.brokersCount - b.brokersCount,
        multiple: 5,
      },
    },
    {
      title: 'Partitions',
      dataIndex: 'partitions',
      sorter: {
        compare: (a, b) => a.partitions - b.partitions,
        multiple: 4,
      },
    }, {
      title: 'Topics',
      dataIndex: 'topics',
      sorter: {
        compare: (a, b) => a.topics - b.topics,
        multiple: 3,
      },
    }, {
      title: 'Production',
      dataIndex: 'production',
      sorter: {
        compare: (a, b) => a.production - b.production,
        multiple: 2,
      },
    }, {
      title: 'Consumption',
      dataIndex: 'consumption',
      sorter: {
        compare: (a, b) => a.consumption - b.consumption,
        multiple: 1,
      },
    },
  ];