import React from "react";

import { Box, Text } from "@chakra-ui/core";
import Grid from "./Grid";
import { CELL_SIZE } from "../globals";
import { useAutomata } from "../hooks/useAutomata";

interface Props {
  title: string;
  structure: number[][];
}

const Pattern: React.FC<Props> = ({ title, structure }) => {
  const { grid, startSimulation, resetSimulation, updateGrid } = useAutomata(
    structure
  );

  const handleMouseEnter = () => {
    startSimulation();
  };
  const handleMouseLeave = () => {
    startSimulation();
    resetSimulation();
  };

  return (
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Text>{title}</Text>
      <Grid cells={grid} cellSize={CELL_SIZE} updateGrid={updateGrid} />
    </Box>
  );
};
export default Pattern;
