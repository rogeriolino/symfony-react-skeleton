<?php

namespace App\Enum;

use MyCLabs\Enum\Enum;

abstract class LabelledEnum extends Enum
{
    abstract public function getLabel(): string;
}