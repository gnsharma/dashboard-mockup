const DonutChart = ({ height = "200px", width = "200px" }: any) => {
  return (
    <svg className="donutchart" viewBox="0 0 400 400" style={{ height, width }}>
      <g className="donutchart-arcs">
        <path
          fill="#c80c1a"
          opacity="1"
          stroke="#212121"
          className="donutchart-arcs-path "
          d="M380,200
  A180, 180 0 0 1 266.262419483242, 367.35976745988523
  L251.5374373758549,330.16870802435517
  A140, 140 0 0 0 340, 200 z"
        />
        <path
          fill="#52d9c9"
          opacity="1"
          stroke="#212121"
          className="donutchart-arcs-path "
          d="M266.262419483242,367.35976745988523
  A180, 180 0 0 1 113.28433866169111, 42.26479759210463
  L132.55448562575975,77.31706479385916
  A140, 140 0 0 0 251.5374373758549, 330.16870802435517 z"
        />
        <path
          fill="#818cd1"
          opacity="1"
          stroke="#212121"
          className="donutchart-arcs-path "
          d="M113.28433866169111,42.26479759210463
  A180, 180 0 0 1 380, 199.99999999999994
  L340,199.99999999999997
  A140, 140 0 0 0 132.55448562575975, 77.31706479385916 z"
        />
      </g>
      <g className="donutchart-innertext">
        <text
          className="donutchart-innertext-value"
          x="200"
          y="50%"
          text-anchor="middle"
        >
          5 Total projects
        </text>
      </g>
    </svg>
  );
};

export default DonutChart;
