<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale" :padding="padding">
      <v-tooltip />
      <v-legend
        :custom="legendCustom"
        :allow-all-canceled="legendAllowAllCanceled"
        :items="legendItems"
        :on-click="legendOnClick"
      />
      <v-axis
        data-key="ratio"
        :grid="axisGrid"
        :label="axisLabel"
      />
      <v-bar position="year*amount" color="#3182bd" />
      <v-smooth-line position="year*ratio" color="#fdae6b" :size="gemoSize" />
      <v-point shape="circle" position="year*ratio" color="#fdae6b" :size="gemoSize" />
    </v-chart>
  </div>
</template>

<script>
const DataSet = require("@antv/data-set");
const sourceData = [
  { year: "2019", total: 64, amount: 52 },
  { year: "2018", total: 52, amount: 32.6 },
  { year: "2017", total: 33.01, amount: 21 },
  { year: "2016", total: 59, amount: 52 },
  { year: "2015", total: 58, amount: 42.23 },
  { year: "2014", total: 81.24, amount: 22.93 },
  { year: "2013", total: 73, amount: 52.84 }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: "map",
  callback(row) {
    row.ratio = row.amount / row.total;
    return row;
  }
});

// dv.transform({
//   type: 'fold',
//   fields: ['total', 'amount'],
//   key: 'key',
//   value: 'value',
// });
const data = dv.rows;

const scale = [
  {
    dataKey: "total",
    min: 0
  },
  {
    dataKey: "amount",
    min: 0
  },
  {
    dataKey: "ratio",
    min: 0,
    formatter: ".0%"
  }
];

export default {
  data() {
    return {
      data,
      scale,
      padding: "auto",
      height: 400,

      axisLabel: {
        textStyle: {
          fill: "#f00"
        }
      },
      axisGrid: null,

      gemoSize: 3,

      legendCustom: true,
      legendAllowAllCanceled: true,
      legendItems: [
        {
          value: "amount",
          marker: { symbol: "square", fill: "#3182bd", radius: 5 }
        },
        {
          value: "total",
          marker: { symbol: "square", fill: "#f890ba", radius: 5 }
        },
        {
          value: "ratio",
          marker: {
            symbol: "hyphen",
            stroke: "#fdae6b",
            radius: 5,
            lineWidth: 3
          }
        }
      ],
      legendOnClick: (ev, chart) => {
        const item = ev.item;
        const value = item.value;
        const checked = ev.checked;
        const geoms = chart.getAllGeoms();
        for (let i = 0; i < geoms.length; i++) {
          const geom = geoms[i];
          if (geom.getYScale().field === value) {
            if (checked) {
              geom.show();
            } else {
              geom.hide();
            }
          }
        }
      }
    };
  }
};
</script>
